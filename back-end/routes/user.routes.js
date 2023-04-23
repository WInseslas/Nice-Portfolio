const router = require('express').Router();
const authenticatorController = require('../controllers/authenticator.controller');

const { checkUser } = require('../middleware/authenticator.middleware')

// Authenticator controller
router.post('/login', authenticatorController.signIn)
router.post('/register', authenticatorController.signUp)
router.get('/logout', checkUser, authenticatorController.logout)

module.exports = router