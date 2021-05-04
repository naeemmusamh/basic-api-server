'use strict';

//initialize and setup the app
const express = require('express');
const app = express();

//middleware for the error page
const notFoundHandle = require('./error-handlers/404.js');
const errorHandler = require('./error-handlers/500.js');

//middleware for the logger and validator page
const logger = require('./middleware/logger.js');


//middleware for the food and clothes page
const foodRouter = require('./routes/food.js');
const clothesRouter = require('./routes/clothes.js');


//globally middleware
app.use(logger);
app.use(express.json());

//attaching our routes module to the app object
app.use(foodRouter);
app.use(clothesRouter);

//route to the home page
app.get('/', (request, response) => {
    response.status(200).send('Hello user this is the home page');
});

//route for the person page
app.get('/person', (request, response) => {
    response.status(200).json({
        name: request.query.name
    });
});

//route for the bad request error
app.get('/bad_request', (request, response) => {
    throw new Error('the error in the path');
});

//route for the middleware handler error
app.use('*', notFoundHandle);
app.use(errorHandler)

//route for start listen for the port
function start(port) {
    app.listen(port, () => {
        console.log(`im listen for the ${port}`);
    });
};

module.exports = {
    app,
    start
}