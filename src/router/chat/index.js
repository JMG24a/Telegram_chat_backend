const { Router } = require('express');
const R = require('../networks')
const chatService = require('../../services/chat');
const router = Router();

router.post('/', function(req, res) {
    chatService.addChat(req.body.users)
        .then(data => {
            R.success(req, res, data, 201);
        })
        .catch(err => {
            R.error(req, res, 'Internal error', 500, err);
        });
});

router.get('/:userId', function(req, res) {
    chatService.getChat(req.params.userId)
        .then(users => {
            R.success(req, res, users, 200);
        })
        .catch(err => {
            R.error(req, res, 'Internal error', 500);
        });
});

module.exports = router;