'use strict';

const { request, response } = require('express');
//initialize and setup the app for the router
const express = require('express');
const router = express.Router();

// middleware for the class constructors in the models food
const Food = require('../models/food.js');

//middleware for the new object from the class constructors in the models food
const foodNewObject = new Food();

//route for the Get All Records for the food
router.get('/food', (request, response) => {
    let items = foodNewObject.get();
    response.status(200).json(items);
});

//route for the Get One Record for the food
router.get('/food/:id', (request, response) => {
    let id = parseInt(request.params.id);
    let items = foodNewObject.get(id);
    response.status(200).json(items);
});

//route for the Add a Record for the food
router.post('/food', (request, response) => {
    let id = request.body;
    let items = foodNewObject.create(id);
    response.status(201).json(items);
});

//route for the Update A Record for the food
router.put('/food/:id', (request, response) => {
    let id = parseInt(request.params.id);
    let items = request.body;
    let methodUpdate = foodNewObject.update(id, items);
    response.status(200).json(methodUpdate);
});

//route for the Delete A Record for the food
router.delete('/food/:id', (request, response) => {
    let id = parseInt(request.params.id);
    let items = foodNewObject.delete(id);
    let message = items ? 'the food is delete' : 'there is no food to delete';
    let status = items ? 202 : 204;
    response.status(status).json({
        message: message,
        items: items
    });
});

//middleware for the router
module.exports = router;