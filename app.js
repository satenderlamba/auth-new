var createError = require('http-errors');
var express = require('express');
var path = require('path');
const expressLayouts = require('express-ejs-layouts');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var app = express();
var admin = require("firebase-admin");


var serviceAccount = require("./dec-self-firebase-adminsdk-xldrb-e15305343c.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://dec-self.firebaseio.com"
});


// EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

// Body-parser
app.use(express.urlencoded({ extended: true }));



app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
