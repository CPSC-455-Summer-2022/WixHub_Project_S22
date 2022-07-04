const mongoose = require("mongoose");
const User = require("./users");
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
    console.log("db is initialized");
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