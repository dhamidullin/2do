'use strict';
var mongoose = require('mongoose');
var winston = require('winston');

var TaskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    datetime: { type: Number, required: true },
    owner_id: { type: String, required: true }
}, { timestamps: true });

mongoose.model('Task', TaskSchema);