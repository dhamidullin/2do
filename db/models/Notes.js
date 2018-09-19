'use strict';
var mongoose = require('mongoose');
var winston = require('winston');

var NoteSchema = new mongoose.Schema({
    title: { type: String, required: true },
    body: { type: String },
    owner_id: { type: String, required: true }
}, { timestamps: true });

mongoose.model('Note', NoteSchema);