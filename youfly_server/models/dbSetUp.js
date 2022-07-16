const mongoose = require("mongoose");
const User = require("./users");
const Destination = require("./destinations");
const Question = require("./questions");
const {v4: uuid} = require("uuid");

const dburl = "mongodb+srv://m001-student:m001-mongodb-basics@cluster0.grgqp0e.mongodb.net/?retryWrites=true&w=majority";

const connectDb = async function() {
    await mongoose.connect(dburl);
    console.log("connected to Mongo db");
};

const dbSetUp = async function() {
    await connectDb();
    await initializeDb();
};

const initializeDb = async function() {
    await initializeUsers();
    await initializeDestinations();
    await initializeQuestions();
    console.log("db is initialized");
};

const initializeQuestions =  async function() {
    await Question.collection.drop().catch((err) => {});
    await Question.insertMany(
        [
            {
                "question": "What type of traveller are you?",
                "destinationMapping": [
                    { "response": 1, "destination": 12, "weighting": 4 },
                    { "response": 2, "destination": 9, "weighting": 6 },
                    { "response": 3, "destination": 8, "weighting": 8 },
                    { "response": 4, "destination": 2, "weighting": 5 },
                ]
            },
            {
                "question": "Who are you travelling with?",
                "destinationMapping": [
                    { "response": 1, "destination": 1, "weighting": 6 },
                    { "response": 2, "destination": 7, "weighting": 9 },
                    { "response": 3, "destination": 9, "weighting": 7 },
                    { "response": 4, "destination": 3, "weighting": 4 },
                ]
            },
            {
                "question": "How long do you want to travel for?",
                "destinationMapping": [
                    { "response": 1, "destination": 12, "weighting": 5 },
                    { "response": 2, "destination": 6, "weighting": 6 },
                    { "response": 3, "destination": 13, "weighting": 8 },
                    { "response": 4, "destination": 14, "weighting": 7 },
                ]
            },
            {
                "question": "Which activity do you like most?",
                "destinationMapping": [
                    { "response": 1, "destination": 2, "weighting": 5 },
                    { "response": 2, "destination": 11, "weighting": 8 },
                    { "response": 3, "destination": 6, "weighting": 4 },
                    { "response": 4, "destination": 8, "weighting": 8 },
                ]
            },
            {
                "question": "Which food are you most likely to try?",
                "destinationMapping": [
                    { "response": 1, "destination": 2, "weighting": 6 },
                    { "response": 2, "destination": 3, "weighting": 6 },
                    { "response": 3, "destination": 6, "weighting": 8 },
                    { "response": 4, "destination": 12, "weighting": 5 },
                ]
            },
            {
                "question": "What type of footwear define you?",
                "destinationMapping": [
                    { "response": 1, "destination": 7, "weighting": 6 },
                    { "response": 2, "destination": 12, "weighting": 9 },
                    { "response": 3, "destination": 10, "weighting": 7 },
                    { "response": 4, "destination": 8, "weighting": 5 },
                ]
            },
            {
                "question": "What's your favourite aspect of a holiday?",
                "destinationMapping": [
                    { "response": 1, "destination": 13, "weighting": 6 },
                    { "response": 2, "destination": 9, "weighting": 6 },
                    { "response": 3, "destination": 1, "weighting": 8 },
                    { "response": 4, "destination": 8, "weighting": 5 },
                ]
            },
            {
                "question": "Which three words best describe your ideal vacation?",
                "destinationMapping": [
                    { "response": 1, "destination": 12, "weighting": 4 },
                    { "response": 2, "destination": 6, "weighting": 6 },
                    { "response": 3, "destination": 4, "weighting": 8 },
                    { "response": 4, "destination": 9, "weighting": 5 },
                ]
            },
        ]
    );

}

const initializeDestinations =  async function() {
    await Destination.collection.drop().catch((err) => {});
    await Destination.insertMany([
        { "destinationId": 1, "city": "Vancouver", "country": "Canada" },
        { "destinationId": 2, "city": "London", "country": "England" },
        { "destinationId": 3, "city": "Amsterdam", "country": "Netherlands" },
        { "destinationId": 4, "city": "Dubai", "country": "United Arab Emirates" },
        { "destinationId": 5, "city": "Beijing", "country": "China" },
        { "destinationId": 6, "city": "Bali", "country": "Indonesia" },
        { "destinationId": 7, "city": "Crete", "country": "Greece" },
        { "destinationId": 8, "city": "Cabo San Lucas", "country": "Mexico" },
        { "destinationId": 9, "city": "Paris", "country": "France" },
        { "destinationId": 10, "city": "Oslo", "country": "Norway" },
        { "destinationId": 11, "city": "Rome", "country": "Italy" },
        { "destinationId": 12, "city": "New York", "country": "United States" },
        { "destinationId": 13, "city": "Kyushi", "country": "Japan" },
        { "destinationId": 14, "city": "Singapore", "country": "Singapore" },
    ]);
};

const initializeUsers = async function() {
    await User.collection.drop().catch((err) => {});
    await User.insertMany([
        {
            "f_name": "Josh",
            "l_name": "Tillson",
            "country": "Canada",
            "destinations": ["1", "5"],
            "question_responses": [1, 2, 3, 4, 1, 2, 3, 4]
        },
        {
            "f_name": "Ronin",
            "l_name": "Cunningham",
            "country": "Canada",
            "destinations": ["2"],
            "question_responses": [1, 1, 1, 1, 1, 1, 1, 1]
        },
        {
            "f_name": "Sherman",
            "l_name": "Lam",
            "country": "Canada",
            "destinations": ["1", "2", "3"],
            "question_responses": [1, 2, 1, 2, 1, 2, 1, 2]
        },
        {
            "f_name": "Kevin",
            "l_name": "Zhao",
            "country": "Canada",
            "destinations": ["1"],
            "question_responses": [2, 3, 4, 4, 4, 3, 3, 2]
        },
    ]);
};

module.exports = dbSetUp;