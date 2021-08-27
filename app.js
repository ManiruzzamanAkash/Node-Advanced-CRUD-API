require('dotenv').config();
var createError  = require('http-errors');
var express      = require('express');
var path         = require('path');
var cookieParser = require('cookie-parser');
var logger       = require('morgan');
var cors 		 = require('cors');

var indexRouter  = require('./routes/index');
var todosRouter  = require('./routes/todos');

var app          = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const db = require("./models");
db.mongoose.connect(db.url, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => {
		// console.log("Connected to the database!");
	})
	.catch(err => {
		console.log("Cannot connect to the database!", err);
		process.exit();
	});

/**
 * All Routes
 */
app.use('/', indexRouter);
app.use('/todos', todosRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
	res.locals.message = err.message;
	res.locals.error   = req.app.get('env') === 'development' ? err: {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

// @see - https://www.bezkoder.com/node-express-mongodb-crud-rest-api/

module.exports = app;
