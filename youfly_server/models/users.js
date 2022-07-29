const mongoose = require("mongoose");

// Schema constructor
const Schema = mongoose.Schema;

// create user schema
const UserSchema = new Schema({
    f_name: {
        type: String,
        require: true
    },
    l_name: {
        type: String,
        require: true
    },
    country: {
        type: String,
        require: true
    },
    destinations: [
        {
        type: String
        }
    ],
    question_responses: [
        {
            type: Number
        }
    ],
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }
}, {timestamps: true});

// create model
const User = mongoose.model('User', UserSchema);

module.exports = User;