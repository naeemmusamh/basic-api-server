'use strict';

const { beforeEach, afterEach, it, expect } = require('@jest/globals');
const logger = require('../src/middleware/logger.js');

describe('logger middleware', () => {
    let consoleSpy;
    let request = {};
    let response = {};
    let next = jest.fn();


    //hooking before the test
    beforeEach(() => {
        consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    });

    //hooking after the test
    afterEach(() => {
        consoleSpy.mockRestore();
    });

    //to check the test is work and pass
    it('log the output', () => {
        logger(request, response, next);
        expect(consoleSpy).toHaveBeenCalled();
        expect(next).toHaveBeenCalled();
    });

});