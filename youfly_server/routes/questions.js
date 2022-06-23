import users from "./users"
import destinations from "./destinations"

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

/* GET a single questionin JSON format. */
router.get('/find', function (req, res, next) {
    const foundQuestion = questions.find(question => question.id === req.query.id);
    return res.send(foundQuestion);
});

// function switchHelper(question, destinationsScore, d1, d2, d3, d4, s1, s2, s3, s4) {
//     switch (question) {
//         case 1:
//             destinationsScore[d1] += s1;
//             break;
//         case 2:
//             destinationsScore[d2] += s2;
//             break;
//         case 3:
//             destinationScore[d3] += s3;
//             break;
//         case 4:
//             destinationScore[d4] += s4;
//             break;
//     }
//     return destinationScore;
// }

// provide a destination recommendation based on a series of question answers
router.post('/', function (req, res, next) {
    let destinationsScore = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    // destinationsScore = switchHelper(req.body.question1, destinationsScore, 12, 9, 8, 2, 4, 6, 8, 5);
    switch (req.body.question1) {
        case 1:
            destinationsScore[12] += 4;
            break;
        case 2:
            destinationsScore[9] += 6;
            break;
        case 3:
            destinationScore[8] += 8;
            break;
        case 4:
            destinationScore[2] += 5;
            break;
    }
    switch (req.body.question2) {
        case 1:
            destinationsScore[1] += 6;
            break;
        case 2:
            destinationsScore[7] += 9;
            break;
        case 3:
            destinationScore[9] += 7;
            break;
        case 4:
            destinationScore[3] += 4;
            break;
    }
    switch (req.body.question3) {
        case 1:
            destinationsScore[12] += 5;
            break;
        case 2:
            destinationsScore[6] += 6;
            break;
        case 3:
            destinationScore[13] += 8;
            break;
        case 4:
            destinationScore[14] += 7;
            break;
    }
    switch (req.body.question4) {
        case 1:
            destinationsScore[2] += 5;
            break;
        case 2:
            destinationsScore[11] += 8;
            break;
        case 3:
            destinationScore[6] += 4;
            break;
        case 4:
            destinationScore[8] += 8;
            break;
    }
    switch (req.body.question5) {
        case 1:
            destinationsScore[2] += 6;
            break;
        case 2:
            destinationsScore[3] += 6;
            break;
        case 3:
            destinationScore[6] += 8;
            break;
        case 4:
            destinationScore[12] += 5;
            break;
    }
    switch (req.body.question6) {
        case 1:
            destinationsScore[7] += 6;
            break;
        case 2:
            destinationsScore[12] += 9;
            break;
        case 3:
            destinationScore[10] += 7;
            break;
        case 4:
            destinationScore[8] += 5;
            break;
    }
    switch (req.body.question7) {
        case 1:
            destinationsScore[13] += 6;
            break;
        case 2:
            destinationsScore[9] += 6;
            break;
        case 3:
            destinationScore[1] += 8;
            break;
        case 4:
            destinationScore[8] += 5;
            break;
    }
    switch (req.body.question8) {
        case 1:
            destinationsScore[12] += 4;
            break;
        case 2:
            destinationsScore[6] += 6;
            break;
        case 3:
            destinationScore[4] += 8;
            break;
        case 4:
            destinationScore[9] += 5;
            break;
    }
    let maxVal = 0;
    let maxIndex = 0;
    for (let i = 0; i < destinationsScore.length; i++) {
        if (maxVal < destinationsScore[i]) {
            maxVal = destinationsScore[i];
            maxIndex = i;
        }
    }
    for (user in users) {
        if (user.id == req.body.id) {
            user.destinations.push(maxIndex + 1);
        }
    }
    let recommendedDestination = {};
    for (destination in destinations) {
        if (destination.id = maxIndex + 1) {
            recommendedDestination = destination;
        }
    }
    return res
        .status(201)
        .send(recommendedDestination);
});

module.exports = router;
