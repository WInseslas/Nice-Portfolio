const router = require('express').Router();
const authenticatorController = require('../controllers/authenticator.controller');

const { checkUser } = require('../middleware/authenticator.middleware');

/**
 * @swagger
 * tags:
 *   name: Authenticator
 *   description: Endpoints for authentication
 */

/**
 * @swagger
 * /api/user/login:
 *   post:
 *     summary: Log in a user
 *     tags: [Authenticator]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *             example:
 *               email: user@example.com
 *               password: password123
 *     responses:
 *       200:
 *         description: Successful login
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */
router.post('/login', authenticatorController.signIn);

/**
 * @swagger
 * /api/user/register:
 *   post:
 *     summary: Register a new user
 *     tags: [Authenticator]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstname:
 *                 type: string
 *               pseudo:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *             example:
 *               firstname: John
 *               pseudo: Username
 *               email: user@example.com
 *               password: password123
 *     responses:
 *        201:
 *          description: Successful registration
 *        400:
 *          description: Bad request
 *        500:
 *          description: Internal server error
 */
router.post('/register', authenticatorController.signUp);

/**
 * @swagger
 * /api/user/logout:
 *   get:
 *     summary: Log out a user
 *     tags: [Authenticator]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Successful logout
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */
router.get('/logout', checkUser, authenticatorController.logout);

module.exports = router;
