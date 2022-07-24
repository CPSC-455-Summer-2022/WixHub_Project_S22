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

// new find user api by id in path parameter
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

/* Post a single user listing in JSON format (adding it to the list) */
router.post('/', function (req, res, next) {
  const user = {
    f_name: req.body.f_name,
    l_name: req.body.l_name, country: req.body.country, destinations: req.body.destinations,
    question_responses: req.body.question_responses
  };
  // users.push(user);
  // return res.status(201).send(req.body);
  User.create(user).then((result) => {
    res.status(201).send(result);
  }).catch((err) => {
    res.status(400).send(err);
  });
});

// new delete user api by id in path parameter
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

// orginal /deleteAll path are depreciate for mongo.
/* Delete all users in stored user list*/
router.delete('/', function (req, res) {
  User.deleteMany({}).then((result1) => {
    User.find().then((result2) => {
      res.status(203).send(result2);
    })
  });
});


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