const router = require('express').Router();
const messageController = require('../controllers/message.controller');

const { checkUser } = require('../middleware/authenticator.middleware')

router.post('/create', messageController.create)
router.get('/read', checkUser, messageController.read)
router.get('/getUnreadMessages', checkUser, messageController.getUnreadMessages)
router.get('/markMessageAsRead/:id', checkUser, messageController.markMessageAsRead)
router.delete('/delete/:id', checkUser, messageController.delete)

module.exports = router