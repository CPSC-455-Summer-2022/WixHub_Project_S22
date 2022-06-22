var express = require('express');
var router = express.Router();
var { v4: uuid } = require('uuid');

// destination mapping shows which destination is best matched to a specific 
// question response and the associated score added to that destination
// to ultimately do the matching in the end

let questions = [
    {
        "id": uuid(),
        "question": "What type of traveller are you?",
        "destinationMapping": [
            { "response": 1, "destination": 12, "weighting": 4 },
            { "response": 2, "destination": 9, "weighting": 6 },
            { "response": 3, "destination": 8, "weighting": 8 },
            { "response": 4, "destination": 2, "weighting": 5 },
        ]
    },
    {
        "id": uuid(),
        "question": "Who are you travelling with?",
        "destinationMapping": [
            { "response": 1, "destination": 1, "weighting": 6 },
            { "response": 2, "destination": 7, "weighting": 9 },
            { "response": 3, "destination": 9, "weighting": 7 },
            { "response": 4, "destination": 3, "weighting": 4 },
        ]
    },
    {
        "id": uuid(),
        "question": "How long do you want to travel for?",
        "destinationMapping": [
            { "response": 1, "destination": 12, "weighting": 5 },
            { "response": 2, "destination": 6, "weighting": 6 },
            { "response": 3, "destination": 13, "weighting": 8 },
            { "response": 4, "destination": 14, "weighting": 7 },
        ]
    },
    {
        "id": uuid(),
        "question": "Which activity do you like most?",
        "destinationMapping": [
            { "response": 1, "destination": 2, "weighting": 5 },
            { "response": 2, "destination": 11, "weighting": 8 },
            { "response": 3, "destination": 6, "weighting": 4 },
            { "response": 4, "destination": 8, "weighting": 8 },
        ]
    },
    {
        "id": uuid(),
        "question": "Which food are you most likely to try?",
        "destinationMapping": [
            { "response": 1, "destination": 2, "weighting": 6 },
            { "response": 2, "destination": 3, "weighting": 6 },
            { "response": 3, "destination": 6, "weighting": 8 },
            { "response": 4, "destination": 12, "weighting": 5 },
        ]
    },
    {
        "id": uuid(),
        "question": "What type of footwear define you?",
        "destinationMapping": [
            { "response": 1, "destination": 7, "weighting": 6 },
            { "response": 2, "destination": 12, "weighting": 9 },
            { "response": 3, "destination": 10, "weighting": 7 },
            { "response": 4, "destination": 8, "weighting": 5 },
        ]
    },
    {
        "id": uuid(),
        "question": "What's your favourite aspect of a holiday?",
        "destinationMapping": [
            { "response": 1, "destination": 13, "weighting": 6 },
            { "response": 2, "destination": 9, "weighting": 6 },
            { "response": 3, "destination": 1, "weighting": 8 },
            { "response": 4, "destination": 8, "weighting": 5 },
        ]
    },
    {
        "id": uuid(),
        "question": "Which three words best describe your ideal vacation?",
        "destinationMapping": [
            { "response": 1, "destination": 12, "weighting": 4 },
            { "response": 2, "destination": 6, "weighting": 6 },
            { "response": 3, "destination": 4, "weighting": 8 },
            { "response": 4, "destination": 9, "weighting": 5 },
        ]
    },
];

/* GET question listing. */
router.get('/', function (req, res, next) {
    res.send(questions);
});

module.exports = router;
