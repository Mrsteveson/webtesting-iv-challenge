const db = require('../data/dbConfig');
const doggos = require('../doggos/doggos-router.js');

describe('doggos model', () => {

    beforeEach(async () => {
        await db('doggos').truncate();
    });


})