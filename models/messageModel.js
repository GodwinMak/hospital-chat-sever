const mongoose = require("mongoose");
const messageSchema = new mongoose.Schema({
    content: String,
    from: Object,
    socketid: String,
    time: String,
    date: String,
    to: String
})

const Message = mongoose.model("Message", messageSchema);

module.exports= Message;