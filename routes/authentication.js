'use strict';
var express = require('express');
var router = express.Router();
var passport = require('passport');
var jwt = require('express-jwt');
var config = require('../config');
var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;
var winston = require('winston');

var auth = require('./jwt');

var User = mongoose.model('User');

router.post('/register', function (req, res, next) {
    if (!req.body.username || !req.body.password || !req.body.repeatingpassword) {
        // 400 = bad request
        res.status(400).json({ message: 'Заполните все поля' });
    }

    if (req.body.password !== req.body.repeatingpassword) {
        // 400 = bad request
        res.status(400).json({ message: 'Пароли не совпадают' });
    }

    var user = new User();

    user.username = req.body.username;

    user.setPassword(req.body.password);
    console.log(user);
    user.save((err) => {
        console.log('user.create');
        console.log('err: ', err);
        if (err) {
            if (err.code == 11000) {
                // 01 Unauthorized
                res.status(401);
                res.json({ message: 'Пользователь уже существует' });
            }
            else
                next();
        }
        else
            res.json({ token: user.generateJWT() })
    });
});

router.post('/login', function (req, res, next) {
    if (!req.body.username || !req.body.password) {
        return res.status(400).json({ message: 'Заполните все поля' });
    }

    console.log(req.body);

    console.log('going to passport');
    passport.authenticate('local', function (err, user, info) {

        console.log('passport callback');
        if (err) {
            res.status(500);
            res.json({ message: 'Database error' });
        }

        if (user) {
            res.json({ token: user.generateJWT() });
        }
        else {
            res.status(401)
            res.json({ message: info });
        }
    })(req, res, next);
});

module.exports = router;
