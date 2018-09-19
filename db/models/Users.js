var mongoose = require('mongoose');
var winston = require('winston');
var crypto = require('crypto');
var jwt = require('jsonwebtoken');
var config = require('../../config');


var UserSchema = new mongoose.Schema({
  username:
  {
    type: String,
    lowercase: true,
    index: true,
    unique: true
  },
  hash: String,
  salt: String
}, { timestamps: true });

UserSchema.methods.generateJWT = function () {

  // set expiration to 60 days
  var today = new Date();
  var exp = new Date(today);
  exp.setDate(today.getDate() + 60);

  return jwt.sign({
    _id: this._id,
    username: this.username,
    exp: parseInt(exp.getTime() / 1000),
  }, config.jwt_secret);
};

UserSchema.methods.setPassword = function (password) {
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
};

UserSchema.methods.validPassword = function (password) {
  var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');

  return this.hash === hash;
};

mongoose.model('User', UserSchema);