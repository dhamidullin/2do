'use strict';
var config = require('../config');
var jwt = require('express-jwt');

var auth = jwt({
    secret: config.jwt_secret,
    userProperty: 'user',
    getToken: (req) => { return req.headers.authorization }
});

module.exports = auth;