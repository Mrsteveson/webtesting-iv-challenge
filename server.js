const express = require('express');
const server = express();

// Import Routers
const doggosRouter = require('./doggos/doggos-router.js');

// Configure Middleware
server.use(express.json());

// Use Routers
server.use('/api/doggos', doggosRouter);

// Server Test. Hello Msg.
server.get('/', (req, res) => {
    res.send({ message: 'Hello from Patty. BE Week4-Day4 Project'})
});

module.exports = server;