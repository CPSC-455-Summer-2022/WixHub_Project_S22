var express = require('express');
var router = express.Router();
var { v4: uuid } = require('uuid');
const User = require("../models/users");
/**
 * @swagger
 *  tags:
 *    name: Users
 *    description: user specific requests
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - userId
 *         - rname
 *         - lname
 *         - country
 *         - destinations
 *         - question_responses
 *       properties:
 *         id:
 *           type: integer
 *           description: The Auto-generated id of a post
 *         rname:
 *           type: string
 *           description: first name of user
 *         lname:
 *           type: string
 *           description: last name of usert
 *         country:
 *           type: string
 *           descripton: country of user
 *         question_responses:
 *           type: array
 *           descripton: users question responeses
 *       example:
 *         id: 1
 *         rname: josh
 *         lname: tillson
 *         country: canada
 *         question_responses: [1,1,1,1,1,1,1,1]
 */

/**
* @swagger
* /users:
*   get:
*     summary: Returns all users
*     tags: [Users]
*     responses:
*       200:
*         description: the list of all Users
*         content:
*           application/json:
*             schema:
*               type: array
*               items:
*                 $ref: '#/components/schemas/User'
*/
router.get('/', function (req, res, next) {
  User.find().then((result) => {
    res.send(result);
  });
  // res.send(users);
});

/**
* @swagger
* /users/:id:
*   get:
*     summary: Returns specified user according to provided id
*     tags: [Users]
*     responses:
*       200:
*         description: a single user based on a given id
*         content:
*           application/json:
*             schema:
*               type: object
*               items:
*                 $ref: '#/components/schemas/User'
*     parameters:
*     - name: id
*       description: user's id
*       required: true
*       type: string
*/
router.get('/:id', function (req, res, next) {
  const userId = req.params.id;
  User.findById(userId).then((result) => {
    if (result) {
      res.send(result);
    } else {
      res.status(404).send();
    }
  });
});

/**
* @swagger
* /users:
*   post:
*     summary: Adds a single user listing in JSON format to user database
*     tags: [Users]
*     responses:
*       200:
*         description: adds a new user to the db
*         content:
*           application/json:
*             schema:
*               type: object
*               items:
*                 $ref: '#/components/schemas/User'
*     parameters:
*     - name: f_name
*       description: user's first name
*       required: true
*       type: string
*     - name: l_name
*       description: user's last name
*       required: true
*       type: string
*     - name: country
*       description: user's country
*       required: true
*       type: string
*     - name: question_responses
*       description: a user's question responses (please enter in array format)
*       required: false
*       type: array
*/
router.post('/', function (req, res, next) {
  const user = {
    f_name: req.body.f_name,
    l_name: req.body.l_name, country: req.body.country, destinations: req.body.destinations,
    question_responses: req.body.question_responses
  };
  User.create(user).then((result) => {
    res.status(201).send(result);
  }).catch((err) => {
    res.status(400).send(err);
  });
});

/**
* @swagger
* /users/:id:
*   delete:
*     summary: delete specified user according to provided id
*     tags: [Users]
*     responses:
*       200:
*         description: a single user based on a given id
*         content:
*           application/json:
*             schema:
*               type: object
*               items:
*                 $ref: '#/components/schemas/User'
*     parameters:
*     - name: id
*       description: user's id
*       required: true
*       type: string
*/
router.delete('/:id', function (req, res) {
  const userId = req.params.id;
  User.findByIdAndDelete(userId).then((result) => {
    if (result) {
      res.status(202).send(result);
    } else {
      res.status(404).send();
    }
  });
});

/**
* @swagger
* /users:
*   delete:
*     summary: deletes all users in db
*     tags: [Users]
*     responses:
*       200:
*         description: the list of all Users
*         content:
*           application/json:
*             schema:
*               type: array
*               items:
*                 $ref: '#/components/schemas/User'
*/
router.delete('/', function (req, res) {
  User.deleteMany({}).then((result1) => {
    User.find().then((result2) => {
      res.status(203).send(result2);
    })
  });
});

/**
* @swagger
* /users:
*   put:
*     summary: Edits a single user listing in JSON format within user database
*     tags: [Users]
*     responses:
*       200:
*         description: edits an existing user in the db
*         content:
*           application/json:
*             schema:
*               type: object
*               items:
*                 $ref: '#/components/schemas/User'
*     parameters:
*     - name: id
*       description: user's id
*       required: true
*       type: string
*     - name: f_name
*       description: user's first name
*       required: true
*       type: string
*     - name: l_name
*       description: user's last name
*       required: true
*       type: string
*     - name: country
*       description: user's country
*       required: true
*       type: string
*     - name: question_responses
*       description: a user's question responses (please enter in array format)
*       required: false
*       type: array
*/
router.put('/edit', function (req, res) {
  const userId = req.body.id;
  const updatedInfo = {
    "f_name": req.body.f_name,
    "l_name": req.body.l_name,
    "country": req.body.country,
    "destinations": req.body.destinations,
    "question_responses": req.body.question_responses,
  };
  User.findByIdAndUpdate(userId, updatedInfo).then(() => {
    User.find().then((result) => {
      res.status(203).send(result);
    });
  });
});

module.exports.router = router;