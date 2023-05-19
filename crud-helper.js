// Connect to the database
require('dotenv').config();
require('./config/database');

// Require the Mongoose models
const User = require('./models/user');
const Run = require('./models/run');

// Local variables will come in handy for holding retrieved documents
let user, run;
let users, runs;
