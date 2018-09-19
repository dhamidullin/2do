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

var Note = mongoose.model('Note');


router.get('/add', auth, (req, res, next) => {
    let newNote = new Note();

    newNote.title = 'Новая заметка';
    newNote.body = '';
    newNote.owner_id = req.user._id

    newNote.save((err, note) => {
        if (err) {
            console.log(err);
            res.status(500).end();
        }
        else {
            res.json({ _id: note._id });
        }
    });
});
router.get('/allNotes', auth, (req, res, next) => {
    Note.find({
        owner_id: req.user._id
    }, (err, notes) => {
        res.json({ notes: notes });
    });
});
router.get('/getOneById', auth, (req, res, next) => {
    Note.findOne({
        _id: ObjectId(req.query._id),
        owner_id: req.user._id
    }, (err, note) => {
        /**
         * error handler
         */
        res.json({
            note: note
        });
    });
});
router.put('/saveNote', auth, (req, res, next) => {
    Note.findOneAndUpdate(
        {
            _id: ObjectId(req.body._id),
            owner_id: req.user._id
        },
        {
            title: req.body.title ? req.body.title : 'empty',
            body: req.body.body
        },
        (err) => {
            res.end();
        });
});
router.delete('/deleteNote', auth, (req, res, next) => {
    Note.findOneAndRemove(
        {
            _id: ObjectId(req.query._id),
            owner_id: req.user._id
        },
        (err) => {
            res.end();
        }
    );
});

module.exports = router;
