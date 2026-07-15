const express = require("express");
const { handleChatRequest } = require("../controllers/chat.controller");

const router = express.Router();

router.post("/", handleChatRequest);

module.exports = router;
