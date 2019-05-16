const db = require('../data/dbConfig');
const doggos = require('../doggos/doggos-router.js');
const server = require('../server.js');
const request = require('supertest');

describe('doggos router', () => {

    beforeAll(async () => {
        await db('doggos').truncate();
    });

    //gets empty array returns 200 success
    it('GET should return code:200', () => {
        return request(server)
        .get('/api/doggos')
        .then(res => {
            expect(res.status).toBe(200);
        });
    });

    //attempts to delete nothing, should return 404, specified does not exist
    it('DELETE should return code:404', () => {
        return request(server)
        .delete('/api/doggos/1')
        .then(res => {
            expect(res.status).toBe(404)
        });
    });

    //attempts to delete nothing on incorrect endpoint, should return 500
    // it('DELETE should return code:500', () => {
    //     return request(server)
    //     .delete('/api/')
    //     .then(res => {
    //         expect(res.status).toBe(500)
    //     });
    // });

    //adds doggo, should return 201
    it('POST should return code:201', () => {
        return request(server)
        .post('/api/doggos')
        .send({ name: 'vincent', status: 'good boi'})
        .then(res => {
            expect(res.status).toBe(201);
        });
    });

    //adds doggo without status, should return 404
    it('POST should return code:404', () => {
        return request(server)
        .post('/api/doggos')
        .send({ name: 'vincent'})
        .then(res => {
            expect(res.status).toBe(404);
        });
    });

    //delete previously added doggo and returns 200
    it('DELETE should return code:200', () => {
        return request(server)
        .delete('/api/doggos/1')
        .then(res => {
            expect(res.status).toBe(200)
        });
    });

    //checking something with heroku deployment
    it('POST should return code:201', () => {
        return request(server)
        .post('/api/doggos')
        .send({ name: 'vincent', status: 'good boi'})
        .then(res => {
            expect(res.status).toBe(201);
        });
    });
});