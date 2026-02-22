const express = require('express');
const router = express.Router();
const Message = require('../models/Message');
const auth = require('../middleware/auth');

// @route   POST api/contact
// @desc    Send a message
// @access  Public
router.post('/', async (req, res) => {
    const { name, email, message } = req.body;
    try {
        const newMessage = new Message({
            name,
            email,
            message
        });
        const savedMessage = await newMessage.save();

        res.json(savedMessage);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   GET api/contact
// @desc    Get all messages
// @access  Private
router.get('/', auth, async (req, res) => {
    try {
        const messages = await Message.find().sort({ createdAt: -1 });
        res.json(messages);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
