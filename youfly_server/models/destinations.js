const mongoose = require("mongoose");

// Schema constructor
const Schema = mongoose.Schema;

// create destination schema
const DestinationSchema = new Schema({
    city: {
        type: String,
        require: true
    },
    country: {
        type: String,
        require: true
    }
}, {timestamps: true});

const Destination = mongoose.model('Destination', DestinationSchema);

module.exports = Destination;