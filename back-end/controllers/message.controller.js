const { message: messageTable } = require("../database/sequelize")

module.exports.create = async (req, res) => {
    const { name, email, subject, message: msg } = req.body
    if (!name || !email || !msg) {
        return res.status(400).json({ message: "Please provide all required fields." })
    }
    if (typeof name !== "string" || typeof email !== "string" || typeof msg !== "string") {
        return res.status(400).json({ message: "Invalid input data format." })
    }

    const messageJson = { name, email, subject, message: msg }

    console.log(req.body)
    messageTable.create(messageJson)
        .then(newMessage => {
            const messageText = `Your message has been successfully sent.`
            res.status(201).json({ message: messageText, data: newMessage })
        })
        .catch(error => {
            const messageText = `An error has occurred. Please try again in a few moments.`
            res.status(500).json({ messageText, data: error })
        })
}


module.exports.read = async (req, res) => {
    messageTable.findAll()
        .then((messages) => {
            const messageText = "The list of messages"
            res.status(200).json({ message: messageText, data: messages })
        })
        .catch(error => {
            const messageText = `An error has occurred. Please try again in a few moments.`
            res.status(500).send({ message: messageText, data: error });
        });
}

module.exports.getUnreadMessages = async (req, res) => {
    try {
        const messages = await messageTable.findAll({ where: { is_read: false } });
        if (messages.length === 0) {
            res.status(200).json({ message: "No unread messages found.", data: [] });
        } else {
            res.status(200).json({ data: messages });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "An error occurred while retrieving unread messages." });
    }
}



module.exports.show = async (req, res) => {
    messageTable.findByPk(req.params.id)
        .then((message) => {
            if (message === null) {
                const message = `The message does not exist.`
                return res.status(404).json(message)
            }
            const messageText = `The message with id ${message.id} has been found`
            return res.status(200).json({ message: messageText, data: message });
        })
        .catch(error => {
            const message = `An error has occurred. Please try again in a few moments.`
            res.status(500).send({ message, data: error });
        });
}

module.exports.markMessageAsRead = async (req, res) => {
    const id = req.params.id;

    try {
        const message = await messageTable.findByPk(id);
        if (!message) {
            return res.status(404).json({ message: `The message with id ${id} was not found.` });
        }
        message.is_read = true;
        await message.save();
        res.status(200).json({ message: `The message with id ${id} has been marked as read.`, data: message });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: `An error occurred while marking the message with id ${id} as read.` });
    }
}


module.exports.delete = async (req, res) => {
    try {
        const id = req.params.id
        const message = await messageTable.findByPk(id)

        if (!message) {
            return res.status(404).json({ message: 'Message not found' })
        }

        await message.destroy()
        return res.status(200).json({ message: 'Message deleted successfully' })
    } catch (error) {
        const message = `An error has occurred. Please try again in a few moments.`
        return res.status(500).json({ message, error })
    }
}
