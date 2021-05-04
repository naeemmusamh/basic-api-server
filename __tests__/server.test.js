'use strict';

//middleware for the server page and setup the app
const server = require('../src/server.js');
const superTest = require('supertest');
const serverRequest = superTest(server.app);
let id;

//testing all the route handle and handle error and routers
describe('testing server middleware', () => {
    //test the home page
    it('route for the home page', async() => {
        let response = await serverRequest.get('/');
        expect(response.status).toEqual(200);
        expect(response.text).toEqual('Hello user this is the home page');
    });

    //text the 404 a bad routes
    it('handler not found', async() => {
        let response = await serverRequest.get('/not_found');
        expect(response.status).toEqual(404);
    });

    //test the 500 a bad routes
    it('route for the bad request page', async() => {
        let response = await serverRequest.get('/bad_request');
        expect(response.status).toEqual(500);
    });

    //test the 404 on the bad method for the person page
    it('handle error method no name', async() => {
        let response = await serverRequest.post('/person');
        expect(response.status).toEqual(404);
    });

    //test the given name in the query string
    it('given an name in the query string', async() => {
        let response = await serverRequest.get('/person?name=naeemmusamh');
        expect(response.status).toEqual(200);
        expect(response.body.name).toEqual('naeemmusamh');
    });
});

describe('test the Api for the database for the food', () => {

    //test the API in the database for update the food
    it('test to be able to the post new food', async() => {
        let response = await serverRequest.post('/food').send({
            name: 'mansaf',
            price: 10
        });
        expect(response.status).toEqual(201);
        expect(response.body.record.name).toEqual('mansaf');
        expect(response.body.record.price).toEqual(10);
        id = response.body.id;
    });

    //test the API in the database for get all the food
    it('test to be able to get all the food', async() => {
        let response = await serverRequest.get('/food');
        expect(response.status).toEqual(200);
    });

    //test the API in the database for get one food
    // it('test to be able to get one food', async() => {
    //     let response = await serverRequest.get(`/food/${id}`);
    //     expect(response.status).toEqual(200);
    //     expect(response.body.record.name).toEqual('mansaf');
    //     expect(response.body.record.price).toEqual(10);
    // });

    //test the API in the database for update the food
    it('test to be able to update the food', async() => {
        let response = await serverRequest.put(`/food/${id}`).send({
            name: 'makmora',
            price: 20
        });
        expect(response.status).toEqual(200);
        expect(response.body.record.name).toEqual('makmora');
        expect(response.body.record.price).toEqual(20);
    });

    //test the API in the database for delete the food
    it('test to be able to delete the food', async() => {
        let response = await serverRequest.delete(`/food/${id}`);
        expect(response.status).toEqual(202);
    });
});

describe('test the Api for the database for the clothes', () => {

    //test the API in the database for update the clothes
    it('test to be able to the post new clothes', async() => {
        let response = await serverRequest.post('/clothes').send({
            name: 'T-shirt',
            brand: 'Zara'
        });
        expect(response.status).toEqual(201);
        expect(response.body.record.name).toEqual('T-shirt');
        expect(response.body.record.brand).toEqual('Zara');
        id = response.body.id;
    });

    //test the API in the database for get all the clothes
    it('test to be able to get all the clothes', async() => {
        let response = await serverRequest.get('/clothes');
        expect(response.status).toEqual(200);
    });

    //test the API in the database for get one clothes
    // it('test to be able to get one clothes', async() => {
    //     let response = await serverRequest.get(`/clothes/${id}`);
    //     expect(response.status).toEqual(200);
    //     expect(response.body.record.name).toEqual('mansaf');
    //     expect(response.body.record.price).toEqual(10);
    // });

    //test the API in the database for update the clothes
    it('test to be able to update the clothes', async() => {
        let response = await serverRequest.put(`/clothes/${id}`).send({
            name: 'hat',
            brand: 'Zara'
        });
        expect(response.status).toEqual(200);
        expect(response.body.record.name).toEqual('hat');
        expect(response.body.record.brand).toEqual('Zara');
    });

    //test the API in the database for delete the clothes
    it('test to be able to delete the clothes', async() => {
        let response = await serverRequest.delete(`/clothes/${id}`);
        expect(response.status).toEqual(202);
    });
});