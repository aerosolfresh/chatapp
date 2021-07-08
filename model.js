const mongoose = require("mongoose");

// define Schema for posts
const chatSchema = mongoose.Schema(
    {
    author: String,
    body: String,
    },
    {timestamps:true}
)
const Chat = mongoose.model("Chat", chatSchema)


module.exports = {
    Chat
};

