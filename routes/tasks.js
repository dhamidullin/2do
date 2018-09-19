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

var Task = mongoose.model('Task');

router.put('/save', auth, (req, res, next) => {
    let task = new Task();

    task.title = req.body.title;
    task.datetime = req.body.datetime;
    task.owner_id = req.user._id;

    if (req.query._id) {
        Task.updateOne(
            {
                _id: ObjectId(req.query._id),
                owner_id: req.user._id
            },
            {
                title: req.body.title,
                datetime: req.body.datetime
            },
            (err, raw) => {
                if (err) {
                    console.log('err: ', err);
                    res.status(500).json({ err: 'database error' });
                }
                else
                    res.end();
            });
    }
    else {
        task.save(err => {
            if (err) {
                console.log('err: ', err);
                res.status(500).json({ err: 'database error' });
            }
            else
                res.end();
        });
    }
});
router.get('/getAll', auth, (req, res, next) => {
    Task.find({ owner_id: req.user._id }, (err, tasks) => {
        res.json({ tasks: tasks });
    });
});
router.get('/getOneById', auth, (req, res, next) => {
    console.log('getOneById');
    Task.findOne({ _id: ObjectId(req.query._id), owner_id: req.user._id }, (err, task) => {
        res.json({ task: task });
    });
});
router.delete('/deleteOneById', auth, (req, res, next) => {
    Task.findOneAndRemove({ _id: ObjectId(req.query._id), owner_id: req.user._id }, (err) => {
        if (err) {
            console.log('err: ', err);
            res.status(500);
            res.end();
        }
        else
            res.end();
    });
});

module.exports = router;
