const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        maxlength: 50
    },
    email: {
        type: String,
        required: true,
        maxlength: 50,
        trim: true
    },
    password: {
        type: String,
        required: true
    }
},{timestamps:true}
)

module.exports = mongoose.model('User', UserSchema);