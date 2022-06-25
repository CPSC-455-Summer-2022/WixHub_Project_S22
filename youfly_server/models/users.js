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
    ]
}, {timestamps: true});

// create model
const User = mongoose.model('User', UserSchema);

module.exports = User;