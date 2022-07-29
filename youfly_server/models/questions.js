const mongoose = require("mongoose");

// Schema constructor
const Schema = mongoose.Schema;

const destinationMappingSchema = new Schema({
    response: {
        type: String,
        require: true
    },
    responseNumber: {
        type: Number,
        require: true
    },
    destination: {
        type: Number,
        require: true
    },
    weighting: {
        type: Number,
        require: true
    },
});

// create question schema
const QuestionSchema = new Schema({
    question: {
        type: String,
        require: true
    },
    destinationMapping: [
        {
            type: destinationMappingSchema
        }
    ]
}, { timestamps: true });

const Question = mongoose.model("Question", QuestionSchema);

module.exports = Question;