var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors')

// setup db
const dbSetup = require("./models/dbSetUp");
dbSetup().then();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var destinationsRouter = require('./routes/destinations');
var questionsRouter = require('./routes/questions');

var app = express();

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter.router);
app.use('/destinations', destinationsRouter.router);
app.use('/questions', questionsRouter);

module.exports = app;
