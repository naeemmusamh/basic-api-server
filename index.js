'use strict';

//initialize and setup the app
require('dotenv').config();
const server = require('./src/server.js');
const PORT = process.env.PORT || 4040;


//start the server running
server.start(PORT);