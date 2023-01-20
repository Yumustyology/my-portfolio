const express = require("express");
const sendMail = require("./sendMail");
const router = express.Router();

router.post("/", (req, res) => {
    const { message, email, subject } = req.body;
    let newMessage = `You have a new message from ${email}. \n \n ${message}`;
    sendMail(email, newMessage, subject,res)
})

module.exports = router