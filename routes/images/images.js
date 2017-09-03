var express = require('express');
var router = express.Router();
var authenticator = require('../../app/authentication/user-pass.js');
var PicManager = require('../../app/chat_functions/pic_manager.js');
var Pic = require('../../app/models/pic.js');


router.get('/user_profile', authenticator.checkLoggedOut, function(req, res, next) {
    var userid = req.query.userid;
    var picManager = new PicManager(new Pic());

    picManager.loadImage(userid).then(function(data) {
        res.json(data);
    });
});

router.post('/new_user_profile', authenticator.checkLoggedOut, function(req, res, next) {
    var picManager = new PicManager(new Pic());
    var buffer = req.body.buffer;
    var name = req.body.name;

    picManager.storeImage(id, name, buffer).then(function(data) {
        res.json({
            success: true
        });
    });
});

module.exports = router;
