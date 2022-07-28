const mongoose = require("mongoose");
const User = require("./users");
const Destination = require("./destinations");
const Question = require("./questions");
const { v4: uuid } = require("uuid");

const dburl = "mongodb+srv://m001-student:m001-mongodb-basics@cluster0.grgqp0e.mongodb.net/?retryWrites=true&w=majority";

const connectDb = async function () {
    await mongoose.connect(dburl);
    console.log("connected to Mongo db");
};

const dbSetUp = async function () {
    await connectDb();
    await initializeDb();
};

const initializeDb = async function () {
    await initializeUsers();
    await initializeDestinations();
    await initializeQuestions();
    console.log("db is initialized");
};

const initializeQuestions = async function () {
    await Question.collection.drop().catch((err) => { });
    await Question.insertMany(
        [
            {
                "question": "What type of traveller are you?",
                "destinationMapping": [
                    { "response": "I like to go with the flow", "responseNumber": 1, "destination": 12, "weighting": 4 },
                    { "response": "I plan everything", "responseNumber": 2, "destination": 9, "weighting": 6 },
                    { "response": "I just want to relax", "responseNumber": 3, "destination": 8, "weighting": 8 },
                    { "response": "I want to do everything", "responseNumber": 4, "destination": 2, "weighting": 5 },
                ]
            },
            {
                "question": "Who are you travelling with?",
                "destinationMapping": [
                    { "response": "The family", "responseNumber": 1, "destination": 1, "weighting": 6 },
                    { "response": "Friends", "responseNumber": 2, "destination": 7, "weighting": 9 },
                    { "response": "Signicant Other", "responseNumber": 3, "destination": 9, "weighting": 7 },
                    { "response": "Solo", "responseNumber": 4, "destination": 3, "weighting": 4 },
                ]
            },
            {
                "question": "How long do you want to travel for?",
                "destinationMapping": [
                    { "response": "A weekend", "responseNumber": 1, "destination": 12, "weighting": 5 },
                    { "response": "A week", "responseNumber": 2, "destination": 6, "weighting": 6 },
                    { "response": "Two weeks", "responseNumber": 3, "destination": 13, "weighting": 8 },
                    { "response": "A month", "responseNumber": 4, "destination": 14, "weighting": 7 },
                ]
            },
            {
                "question": "Which activity do you like most?",
                "destinationMapping": [
                    { "response": "Visit museums", "responseNumber": 1, "destination": 2, "weighting": 5 },
                    { "response": "Explore Ancient Relics", "responseNumber": 2, "destination": 11, "weighting": 8 },
                    { "response": "Hike through mountains", "responseNumber": 3, "destination": 6, "weighting": 4 },
                    { "response": "Sunbathe on the beach", "responseNumber": 4, "destination": 8, "weighting": 8 },
                ]
            },
            {
                "question": "Which food are you most likely to try?",
                "destinationMapping": [
                    { "response": "Anything sweet", "responseNumber": 1, "destination": 2, "weighting": 6 },
                    { "response": "Nothing too spicy", "responseNumber": 2, "destination": 3, "weighting": 6 },
                    { "response": "Anything!", "responseNumber": 3, "destination": 6, "weighting": 8 },
                    { "response": "You're very picky", "responseNumber": 4, "destination": 12, "weighting": 5 },
                ]
            },
            {
                "question": "What type of footwear define you?",
                "destinationMapping": [
                    { "response": "Hiking boots", "responseNumber": 1, "destination": 7, "weighting": 6 },
                    { "response": "Leather dress shoes", "responseNumber": 2, "destination": 12, "weighting": 9 },
                    { "response": "Runners", "responseNumber": 3, "destination": 10, "weighting": 7 },
                    { "response": "Sandals", "responseNumber": 4, "destination": 8, "weighting": 5 },
                ]
            },
            {
                "question": "What's your favourite aspect of a holiday?",
                "destinationMapping": [
                    { "response": "Immersing in different cultures", "responseNumber": 1, "destination": 13, "weighting": 6 },
                    { "response": "Delving into the history of a place", "responseNumber": 2, "destination": 9, "weighting": 6 },
                    { "response": "Exploring nature", "responseNumber": 3, "destination": 1, "weighting": 8 },
                    { "response": "Interacting with locals", "responseNumber": 4, "destination": 8, "weighting": 5 },
                ]
            },
            {
                "question": "Which three words best describe your ideal vacation?",
                "destinationMapping": [
                    { "response": "Exotic, surprising and serene", "responseNumber": 1, "destination": 12, "weighting": 4 },
                    { "response": "Adventurous, fun and undiscovered", "responseNumber": 2, "destination": 6, "weighting": 6 },
                    { "response": "Luxurious slow paced and beautiful", "responseNumber": 3, "destination": 4, "weighting": 8 },
                    { "response": "Educational, cultural and amusing", "responseNumber": 4, "destination": 9, "weighting": 5 },
                ]
            },
        ]
    );

}

const initializeDestinations = async function () {
    await Destination.collection.drop().catch((err) => { });
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

const initializeUsers = async function () {
    await User.collection.drop().catch((err) => { });
    await User.insertMany([
        {
            "f_name": "Josh",
            "l_name": "Tillson",
            "country": "Canada",
            "destinations": ["1", "5"],
            "question_responses": [1, 2, 3, 4, 1, 2, 3, 4],
            "email": "josh@tillson.com",
            "password": "1234password"
        },
        {
            "f_name": "Ronin",
            "l_name": "Cunningham",
            "country": "Canada",
            "destinations": ["2"],
            "question_responses": [1, 1, 1, 1, 1, 1, 1, 1],
            "email": "ronin@cunningham.com",
            "password": "1234password"
        },
        {
            "f_name": "Sherman",
            "l_name": "Lam",
            "country": "Canada",
            "destinations": ["1", "2", "3"],
            "question_responses": [1, 2, 1, 2, 1, 2, 1, 2],
            "email": "sherman@lam.com",
            "password": "1234password"
        },
        {
            "f_name": "Kevin",
            "l_name": "Zhao",
            "country": "Canada",
            "destinations": ["1"],
            "question_responses": [2, 3, 4, 4, 4, 3, 3, 2],
            "email": "kevin@zhao.com",
            "password": "1234password"
        },
    ]);
};

module.exports = dbSetUp;