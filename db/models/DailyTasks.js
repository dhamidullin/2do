'use strict';
var mongoose = require('mongoose');
var winston = require('winston');

var DailyTasksSchema = new mongoose.Schema({
    title: { type: String, required: true },
    time: { type: Number, required: true },
    owner_id: { type: String, required: true }
}, { timestamps: true });

mongoose.model('DailyTask', DailyTasksSchema);