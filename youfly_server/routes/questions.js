const User = require("../models/users");
const Destination = require("../models/destinations");
var express = require('express');
var router = express.Router();
var { v4: uuid } = require('uuid');
const Question = require("../models/questions");

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

/**
 * @swagger
 *  tags:
 *    name: Questions
 *    description: question specific requests
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Question:
 *       type: object
 *       required:
 *         - id
 *         - question
 *         - destinationMapping
 *       properties:
 *         id:
 *           type: integer
 *           description: The Auto-generated id of a post
 *         question:
 *           type: string
 *           description: question asked
 *         destinationMapping:
 *           type: array
 *           description: last name of usert
 *       example:
 *         id: 1
 *         question: "who am I"
 *         destination_mapping: [{ "response": 1, "destination": 12, "weighting": 4 }, { "response": 2, "destination": 6, "weighting": 6 }, { "response": 3, "destination": 4, "weighting": 8 }, { "response": 4, "destination": 9, "weighting": 5 }]
 */

/**
* @swagger
* /questions:
*   get:
*     summary: Returns complete question listing
*     tags: [Questions]
*     responses:
*       200:
*         description: the list of all Questions
*         content:
*           application/json:
*             schema:
*               type: array
*               items:
*                 $ref: '#/components/schemas/Question'
*/
router.get('/', function (req, res, next) {
    // res.send(questions);
    Question.find().then((result) => {
        res.send(result);
    })
});

/**
* @swagger
* /questions/:id:
*   get:
*     summary: Returns specified question according to provided id
*     tags: [Questions]
*     responses:
*       200:
*         description: a single question based on a given id
*         content:
*           application/json:
*             schema:
*               type: object
*               items:
*                 $ref: '#/components/schemas/Question'
*     parameters:
*     - name: id
*       description: questions's id
*       required: true
*       type: string
*/
router.get('/:id', function (req, res, next) {
    const questionId = req.params.id;
    Question.findById(questionId).then((result) => {
        if (result) {
            res.send(result);
        } else {
            res.status(404).send();
        }
    });
});

function switchHelper(question, destinationsScore, d1, d2, d3, d4, s1, s2, s3, s4) {
    ;
    switch (parseInt(question)) {
        case 1:
            destinationsScore[d1 - 1] += s1;
            break;
        case 2:
            destinationsScore[d2 - 1] += s2;
            break;
        case 3:
            destinationsScore[d3 - 1] += s3;
            break;
        case 4:
            destinationsScore[d4 - 1] += s4;
            break;
    }
    return destinationsScore;
}
/**
* @swagger
* /questions/recommendation:
*   post:
*     summary: provide a destination recommendation based on a series of question answers
*     tags: [Questions]
*     responses:
*       200:
*         description: provides a recommendation (returns id of destination)
*         content:
*           application/json:
*             schema:
*               type: string
*     parameters:
*     - name: id
*       required: true
*       type: string
*     - name: question1
*       required: true
*       type: integer
*     - name: question2
*       required: true
*       type: integer
*     - name: question3
*       required: true
*       type: integer
*     - name: question4
*       required: true
*       type: integer
*     - name: question5
*       required: true
*       type: integer
*     - name: question6
*       required: true
*       type: integer
*     - name: question7
*       required: true
*       type: integer
*     - name: question8
*       required: true
*       type: integer
*/
// provide a destination recommendation based on a series of question answers
router.post('/recommendation', function (req, res, next) {
    let destinationsScore = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    destinationsScore = switchHelper(req.body.question1, destinationsScore, 12, 9, 8, 2, 4, 6, 8, 5);
    destinationsScore = switchHelper(req.body.question2, destinationsScore, 1, 7, 9, 3, 6, 9, 7, 4);
    destinationsScore = switchHelper(req.body.question3, destinationsScore, 5, 6, 13, 14, 3, 6, 8, 7);
    destinationsScore = switchHelper(req.body.question4, destinationsScore, 2, 11, 6, 8, 5, 8, 4, 8);
    destinationsScore = switchHelper(req.body.question5, destinationsScore, 2, 3, 6, 12, 6, 6, 8, 5);
    destinationsScore = switchHelper(req.body.question6, destinationsScore, 7, 12, 10, 8, 6, 9, 7, 5);
    destinationsScore = switchHelper(req.body.question7, destinationsScore, 13, 9, 1, 8, 6, 6, 8, 5);
    destinationsScore = switchHelper(req.body.question8, destinationsScore, 12, 6, 4, 9, 4, 6, 8, 5);
    let maxVal = 0;
    let maxIndex = 0;
    for (let i = 0; i < destinationsScore.length; i++) {
        if (maxVal < destinationsScore[i]) {
            maxVal = destinationsScore[i];
            maxIndex = i;
        }
    }
    maxIndex = maxIndex + 1;
    console.log(maxIndex);
    const userId = req.body.id;
    const updatedInfo = {
        "destinations": req.body.destinations
    };
    User.findByIdAndUpdate(userId, updatedInfo).then(() => {
        Destination.find({ destinationId: maxIndex }).then((recommendedDestination) => {
            return res
                .status(201)
                .send(recommendedDestination);
        });
    });
});

module.exports = router;



