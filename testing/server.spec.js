const request = require('supertest');
const server = require('../server.js');

describe('server', () => {

    it('sets the environment to testing', () => {
        expect(process.env.DB_ENV).toBe('testing')
    });

    it('checks status code:200', () => {
        return request(server).get('/').expect(200);
    });

    it('checks server hello msg', () => {
        const expected = {message: 'Hello from Patty. BE Week4-Day4 Project'};

        request(server).get('/').then(res => {
            expect(res.body).toEqual(expected)
        });
    });

});