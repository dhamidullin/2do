var mongoose = require('mongoose');
var config = require('../config/index');
var winston = require('winston');

// connect MongoDB
mongoose.connect(config.db.uri, { useNewUrlParser: true }, (err) => {
    if (!err) {
        console.log(`Connected to ${config.db.uri}`);
    } else {
        console.dir(err); //failed to connect
    }
});

// connect models
require('./models/Users');
require('./models/Tasks');
require('./models/DailyTasks');
require('./models/Notes');
require('./models/Boards');