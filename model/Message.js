const mongoose = require("mongoose");
const Schema  = mongoose.Schema;

const MessageSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    message: {
        type: String,
        require: true
    }
})

const Message = mongoose.model('Message', MessageSchema);
module.exports = Message;