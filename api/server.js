const express = require('express');
const helmet = require('helmet');

const apiRouter = require('./api-router.js');
const cors = require('cors')
const server = express();
server.use(express.json())
server.use(helmet());
server.use(cors())
server.use('/api', apiRouter);

module.exports = server;
