"use strict";
var express = require("express");
var path = require("path");
var favicon = require("serve-favicon");
var logger = require("morgan");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var passport = require("passport");
var winston = require("winston");

var app = express();

require("./db");
require("./config/passport");
require("./logger");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "angular-app/dist/angular-app")));
app.use(passport.initialize());

// log all request
app.use((req, res, next) => {
  console.log(req.method + ": " + req.url);
  if (req.method == "POST" || req.method == "PUT") {
    console.log("body: ", req.body);
  }

  next();
});

app.use("/api", require("./routes"));

/* send front-end and or error handler */
app.use((req, res, next) => {
  if (res.statusCode == 200) {
    return res.sendFile(__dirname + "/angular-app/dist/angular-app/index.html");
  }
  console.log("statusCode: " + res.statusCode);
  console.log("statusMessage: " + res.statusMessage);
  res.end();
});

module.exports = app;
