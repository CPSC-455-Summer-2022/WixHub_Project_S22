var express = require('express');
var router = express.Router();
var { v4: uuid } = require('uuid');
const User = require("../models/users");

let users = [
  {
    "id": uuid(),
    "f_name": "Josh",
    "l_name": "Tillson",
    "country": "Canada",
    "destinations": ["1", "5"],
    "question_responses": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  {
    "id": uuid(),
    "f_name": "Ronin",
    "l_name": "Cunningham",
    "country": "Canada",
    "destinations": ["2"],
    "question_responses": [1, 1, 1, 1, 1, 1, 1, 1]
  },
  {
    "id": uuid(),
    "f_name": "Sherman",
    "l_name": "Lam",
    "country": "Canada",
    "destinations": ["1", "2", "3"],
    "question_responses": [1, 2, 1, 2, 1, 2, 1, 2]
  },
  {
    "id": 123456,
    "f_name": "Kevin",
    "l_name": "Zhao",
    "country": "Canada",
    "destinations": ["1"],
    "question_responses": [2, 3, 4, 4, 4, 3, 3, 2]
  },
];

// GET users listing in JSON format.
router.get('/', function (req, res, next) {
  User.find().then((result) => {
      res.send(result);
  });
  // res.send(users);
});

/*this one does not fit as industrial standard, should pass id by path parameter*/
/* GET a single user listing in JSON format. */
router.get('/find', function (req, res, next) {
  const foundUser = users.find(user => user.id === req.query.id);
  return res.send(foundUser);
  // const userId = req.query.id;
  // User.findById(userId).then((result) => {
  //   if (result) {
  //     res.send(result);
  //   } else {
  //     res.status(404).send();
  //   }
  // });
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

/*this one does not fit as industrial standard, should pass id by path parameter*/
/* Delete a single user listing in stored users list*/
router.delete('/delete', function (req, res) {
  let i = 0;
  users.forEach(function (user) {
    if (user.id == req.query.id) {
      delete users[i];
      users = users.filter(user => user);
    }
    i += 1;
  });
  return res
    .status(202)
    .send(users);
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
  // users = [];
  // return res
  //   .status(203)
  //   .send(users);
  User.deleteMany({}).then((result1) => {
    User.find().then((result2) => {
      res.status(203).send(result2);
    })
  });
});


router.put('/edit', function (req, res) {
  // let editedUser = "";
  // users.forEach(function (user) {
  //   if (user.id == req.body.id) {
  //     user.f_name = req.body.f_name;
  //     user.l_name = req.body.l_name;
  //     user.country = req.body.country;
  //     user.destinations = req.body.destinations;
  //     user.question_responses = req.body.question_responses;
  //     editedUser = user;
  //   }
  // });
  // return res
  //   .status(204)
  //   .send(users);
  const userId = req.body.id;
  const updatedInfo = {
    "f_name" : req.body.f_name,
    "l_name" : req.body.l_name,
    "country" : req.body.country,
    "destinations" : req.body.destinations,
    "question_responses" : req.body.question_responses,
  };
  User.findByIdAndUpdate(userId, updatedInfo).then(() => {
    User.find().then((result) => {
      res.status(203).send(result);
    });
  });
});

module.exports.router = router;
module.exports.users = users;