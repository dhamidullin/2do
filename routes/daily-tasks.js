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

var DailyTask = mongoose.model('DailyTask');

router.get('ping', (req, res) => {
    res.json({ res: 'pong' });
});

router.put('/saveDailyTask', auth, (req, res, next) => {
    let dailyTask = new DailyTask();

    dailyTask.title = req.body.title;
    dailyTask.time = req.body.time;
    dailyTask.owner_id = req.user._id;

    if (req.query._id) {
        DailyTask.updateOne(
            {
                _id: ObjectId(req.query._id),
                owner_id: req.user._id
            },
            {
                title: req.body.title,
                time: req.body.time
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
        dailyTask.save(err => {
            if (err) {
                console.log('err: ', err);
                res.status(500).json({ err: 'database error' });
            }
            else
                res.end();
        });
    }
});
router.get('/getAllDailyTasks', auth, (req, res, next) => {
    DailyTask.find({ owner_id: req.user._id }, (err, dailyTasks) => {
        res.json({ dailyTasks: dailyTasks });
    });
});
router.get('/getDailyTaskById', auth, (req, res, next) => {
    DailyTask.findOne({ _id: ObjectId(req.query._id), owner_id: req.user._id }, (err, dailyTask) => {
        res.json({ dailyTask: dailyTask });
    });
});
router.delete('/deleteDailyTaskById', auth, (req, res, next) => {
    DailyTask.findOneAndRemove({ _id: ObjectId(req.query._id), owner_id: req.user._id }, (err) => {
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
