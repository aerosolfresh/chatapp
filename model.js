const mongoose = require("mongoose");

// define Schema for posts
const messageSchema = mongoose.Schema(
    {
    author: String,
    body: String,
    },
    {timestamps:true}
)
const Message = mongoose.model("Message", messageSchema)


module.exports = {
    Message
};

