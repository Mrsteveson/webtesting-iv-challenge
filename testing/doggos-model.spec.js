const db = require('../data/dbConfig');
const doggos = require('../doggos/doggos-model.js');

describe('doggos model', () => {

    beforeEach(async () => {
        await db('doggos').truncate();
    });


})