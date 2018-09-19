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

var Board = mongoose.model('Board');

router.get('/myBoard', auth, (req, res, next) => {
    Board.findOne(
        {
            owner_id: req.user._id
        },
        (err, board) => {
            res.json({
                board: board
            });
        }
    );
});
router.get('/saveBoard', auth, (req, res, next) => {
    Board.findOneAndUpdate(
        {
            owner_id: req.user._id
        }, {

            $set: {
                items: req.body.items
            }

        },
        (err, board) => {
            res.json({
                board: board
            });
        }
    );
});
router.get('/createBoard', auth, (req, res, next) => {
    let newBoard = new Board();
    newBoard.owner_id = req.user._id;

    newBoard.save((err) => {
        res.end();
    });
});


module.exports = router;
