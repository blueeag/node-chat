var express = require('express');
var router = express.Router();
var authenticator = require('../../app/authentication/user-pass.js')
var manager = require('../../app/chat_functions/chat_manager.js');

router.get('/:chatID', authenticator.checkLoggedOut, function(req, res, next) {
    /* TODO Load specific chat */
    //if someone just accessed the url directly
    if(!req.session.members[req.params.chatID]) {
        manager.loadChat(req.session.members, req.session.user.username, req.params.chatID, res);
    }
    else {
        res.render('chat', req.session.members[req.params.chatID]);
    }
});

router.post('/join_chat', authenticator.checkLoggedOut, function(req, res, next) {
    manager.joinChat(req.session.members, req.session.user.username, req.body.joinChat, res);
});

router.post('/create_chat', authenticator.checkLoggedOut, function(req, res, next) {
    var info = manager.createChat(res, req.body.createChat, req.session.user.username);
    req.session.members[info.id] = info; 
});


module.exports = router;

