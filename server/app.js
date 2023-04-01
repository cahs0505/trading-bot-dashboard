const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")
const config = require('./config/config');
const httpStatus = require('http-status');
const { errorConverter, errorHandler } = require('./middlewares/error');
const ApiError = require('./utils/ApiError');

const app = express();
	
app.use(cors());

app.use(express.json());
app.use(express.static('build'))
require("./models/Account");
require("./models/Portfolio");

app.use(require('./routes'));

app.get("/" ,(req,res) => {
	res.send("hello world")
})

// send back a 404 error for any unknown api request
app.use((req, res, next) => {
	next(new ApiError(httpStatus.NOT_FOUND, 'Not found'));
  });
  
// convert error to ApiError, if needed
app.use(errorConverter);

// handle error
app.use(errorHandler);

module.exports = app;


