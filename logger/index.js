'use strict';
var winston = require('winston');
var mongoose = require('mongoose');
var sugar = require('sugar');
var fs = require('fs');

require('winston-mongodb');

const { format, transports } = winston;
const { combine, timestamp, label, prettyPrint, json, printf } = format;

var config = require('../config');

var levels = {
    err: 1,
    warn: 2,
    info: 3,
    debug: 4,
    trace: 5
}

var readableLogsFormat = combine(
    label({ label: 'right meow!' }),
    timestamp(),
    prettyPrint(),
    json(),
    printf(info => {
        var now = sugar.Date.create(info.timestamp);
        var str = '';
        str += `${now.toLocaleString()}:${now.getMilliseconds()} ${info.level} `;
        // str += `${typeof info.message === 'string' ? 'message' : typeof info.message}: `
        str += `${typeof info.message}: `
        str += `${typeof info.message === 'string' ? info.message : JSON.stringify(info.message)}\n`
        return str;
    })
);

var today = Date.now();
winston.loggers.add('logger1', {
    levels: levels,
    transports: [
        new transports.Console({
            level: 'object',
            format: readableLogsFormat
        }),
        // new transports.File({
        //     level: 'object',
        //     filename: `${__dirname}/logs/${today}.log`,
        //     format: readableLogsFormat
        // }),
        new transports.MongoDB({
            db: config.db.uri,
            level: 'object',
            options: { useNewUrlParser: true },
            decolorize: true,
            collection: 'logs',
            expireAfterSeconds: 60 * 60 * 24 * 7
        })
    ]
});


