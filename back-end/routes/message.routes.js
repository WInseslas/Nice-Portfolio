const router = require('express').Router();
const messageController = require('../controllers/message.controller');

const { checkUser } = require('../middleware/authenticator.middleware');

/**
 * @swagger
 * tags:
 *   name: Messages
 *   description: Endpoints for managing messages
 */

/**
 * @swagger
 * /api/message/create:
 *   post:
 *     summary: Create a new message
 *     tags: [Messages]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               subject:
 *                 type: string
 *               message:
 *                 type: string
 *             example:
 *               name: John Doe
 *               email: john.doe@example.com
 *               subject: Inquiry
 *               message: Hello, I have a question.
 *     responses:
 *       201:
 *         description: Message created successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */
router.post('/create', messageController.create);

/**
 * @swagger
 * /api/message/read:
 *   get:
 *     summary: Get all messages
 *     tags: [Messages]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Successful retrieval of messages
 *       500:
 *         description: Internal server error
 */
router.get('/read', checkUser, messageController.read);

/**
 * @swagger
 * /api/message/getUnreadMessages:
 *   get:
 *     summary: Get unread messages
 *     tags: [Messages]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Successful retrieval of unread messages
 *       500:
 *         description: Internal server error
 */
router.get('/getUnreadMessages', checkUser, messageController.getUnreadMessages);

/**
 * @swagger
 * /api/message/markMessageAsRead/{id}:
 *   get:
 *     summary: Mark a message as read
 *     tags: [Messages]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the message to mark as read
 *     responses:
 *       200:
 *         description: Message marked as read successfully
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Message not found
 *       500:
 *         description: Internal server error
 */
router.get('/markMessageAsRead/:id', checkUser, messageController.markMessageAsRead);

/**
 * @swagger
 * /api/message/delete/{id}:
 *   delete:
 *     summary: Delete a message
 *     tags: [Messages]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the message to delete
 *     responses:
 *       200:
 *         description: Message deleted successfully
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Message not found
 *       500:
 *         description: Internal server error
 */
router.delete('/delete/:id', checkUser, messageController.delete)

module.exports = router