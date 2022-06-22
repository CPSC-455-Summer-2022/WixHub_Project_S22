var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var destinationsRouter = require('./routes/destinations');
var questionsRouter = require('./routes/questions');
var destinationMappingRouter = require('./routes/destinationMapping');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/destinations', destinationsRouter);
app.use('/questions', questionsRouter);
app.use('/destinationMapping', destinationMappingRouter);

module.exports = app;
