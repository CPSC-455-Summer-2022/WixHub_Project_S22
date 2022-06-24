var express = require('express');
var router = express.Router();
var { v4: uuid } = require('uuid');

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
    "id": uuid(),
    "f_name": "Kevin",
    "l_name": "Zhao",
    "country": "Canada",
    "destinations": ["1"],
    "question_responses": [2, 3, 4, 4, 4, 3, 3, 2]
  },
];

// GET users listing in JSON format.
router.get('/', function (req, res, next) {
  res.send(users);
});

/* GET a single user listing in JSON format. */
router.get('/find', function (req, res, next) {
  const foundUser = users.find(user => user.id === req.query.id);
  return res.send(foundUser);
});

/* Post a single user listing in JSON format (adding it to the list) */
router.post('/', function (req, res, next) {
  const user = {
    id: uuid(), rname: req.body.rname, f_name: req.body.f_name,
    l_name: req.body.l_name, country: req.body.country, destinations: req.body.destinations,
    question_responses: req.body.question_responses
  };
  users.push(user);
  return res
    .status(201)
    .send(req.body);
});

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


/* Delete all users in stored user list*/
router.delete('/deleteAll', function (req, res) {
  users = [];
  return res
    .status(203)
    .send(users);
});


router.put('/edit', function (req, res) {
  let editedUser = "";
  users.forEach(function (user) {
    if (user.id == req.body.id) {
      user.f_name = req.body.f_name;
      user.l_name = req.body.l_name;
      user.country = req.body.country;
      user.destinations = req.body.destinations;
      user.question_responses = req.body.question_responses;
      editedUser = user;
    }
  });
  return res
    .status(204)
    .send(users);

});


module.exports.router = router;
module.exports.users = users;