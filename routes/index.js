'use strict';
var express = require('express');
var router = express.Router();
var passport = require('passport');
var jwt = require('express-jwt');
var config = require('../config')
var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;
var winston = require('winston');

var auth = require('./jwt');

var User = mongoose.model('User');
var Task = mongoose.model('Task');
var DailyTask = mongoose.model('DailyTask');
var Note = mongoose.model('Note');

router.get('/ping', auth, (req, res) => {
    console.log('/ping => pong');
    res.json({
        ping: 'pong',
        headers_authorization: req.headers.authorization,
        user: req.user
    });
});

router.use('/authentication', require('./authentication'));
router.use('/tasks', require('./tasks'));
router.use('/daily-tasks', require('./daily-tasks'));
router.use('/notes', require('./notes'));
router.use('/board', require('./board'));

module.exports = router;
