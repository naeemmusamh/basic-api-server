'use strict';

//initialize and setup the app for the router
const express = require('express');
const router = express.Router();

// middleware for the class constructors in the models Clothes
const Clothes = require('../models/clothes.js');

//middleware for the new object from the class constructors in the models clothes
const clothesNewObject = new Clothes();

//route for the Get All Records for the Clothes
router.get('/Clothes', (request, response) => {
    let items = clothesNewObject.get();
    response.status(200).json(items);
});

//route for the Get One Record for the Clothes
router.get('/Clothes/:id', (request, response) => {
    let id = parseInt(request.params.id);
    let items = clothesNewObject.get(id);
    response.status(200).json(items);
});

//route for the Add a Record for the Clothes
router.post('/Clothes', (request, response) => {
    let id = request.body;
    let items = clothesNewObject.create(id);
    response.status(201).json(items);
});

//route for the Update A Record for the Clothes
router.put('/Clothes/:id', (request, response) => {
    let id = parseInt(request.params.id);
    let items = request.body;
    let methodUpdate = clothesNewObject.update(id, items);
    response.status(200).json(methodUpdate);
});

//route for the Delete A Record for the Clothes
router.delete('/Clothes/:id', (request, response) => {
    let id = parseInt(request.params.id);
    let items = clothesNewObject.delete(id);
    let message = items ? 'the Clothes is delete' : 'there is no Clothes to delete';
    let status = items ? 202 : 204;
    response.status(status).json({
        message: message,
        items: items
    });
});

//middleware for the router
module.exports = router;