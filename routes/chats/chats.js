var express = require('express');
var router = express.Router();
var authenticator = require('../../app/authentication/user-pass.js');
var check_csrf = require('../../app/csrf/check_csrf.js');
const Manager = require('../../app/chat_functions/chat_manager.js');
const Chat =  require('../../app/models/chat.js');
const session_handler = require('../../app/session/session_handler.js');

var manager;
if(!manager) {
    manager = new Manager(new Chat());
}

router.get('/:chatID', authenticator.checkLoggedOut, function(req, res, next) {
    /* TODO CACHE THIS SHIT*/

    manager.loadChat(req.session.user.username, req.params.chatID, req, res);
    
    //session_handler.handleSession(req.sessionID, function(session) {
    //});
    //if(!req.session.members[req.params.chatID]) {
        //manager.loadChat(req.session.members, req.session.user.username, req.params.chatID, res);
    //}

    //else {
        //res.render('chat', req.session.members[req.params.chatID]);
    //}
});

router.post('/loadLines', authenticator.checkLoggedOut, function(req, res, next) {

    manager.loadMoreLines(req.session.user.username, req.body.chatID, req.session.lastTimeStamp, req, res);

    //session_handler.handleSession(req.sessionID, function(session) {
    //});
});

router.post('/:chatID/initLines', authenticator.checkLoggedOut, function(req, res, next) {

    manager.loadLines(req.session.user.username, req.params.chatID, req, res);

    //session_handler.handleSession(req.sessionID, function(session) {
    //});
});

router.post('/join_chat', authenticator.checkLoggedOut, function(req, res, next) {

    check_csrf(req, res, function() {
        manager.joinChat(req.session.user.username, req.body.joinChat, req, res);
    });
    //session_handler.handleSession(req.sessionID, function(session) {
    //});
});

router.post('/create_chat', authenticator.checkLoggedOut, function(req, res, next) {

    check_csrf(req, res, function() {
        manager.createChat(req.session.user.username, req.body.createChat, req, res);
    });
    //session_handler.handleSession(req.sessionID, function(session) {
    //});
    //req.session.members[info.id] = info; 
});


module.exports = router;

