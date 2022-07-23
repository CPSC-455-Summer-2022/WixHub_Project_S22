var express = require('express');
var router = express.Router();
var { v4: uuid } = require('uuid');
const User = require("../models/users");

// GET users listing in JSON format.
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