'use strict';
var mongoose = require('mongoose');
var winston = require('winston');

var BoardSchema = new mongoose.Schema({
    owner_id: {
        type: String,
        required: true,
        unique: true
    },
    items: {
        type: Array,
        default: []
    }

}, { timestamps: true });

mongoose.model('Board', BoardSchema);