const db = require('../data/dbConfig.js');

module.exports = {
    get,
    add,
    remove
}

function get() {
    return db('doggos')
};

function findById(id) {
    return db('doggos')
    .where({ id })
    .first()
};

function add(doggo) {
    return db('doggos')
    .insert(doggo)
    .then(id => {
        return findById(id[0])
    });
};

function remove(id) {
    return db('doggos')
    .where({ id })
    .first()
    .del()
};