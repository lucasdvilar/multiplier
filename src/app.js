const express = require('express');
require('express-async-errors');
const error = require('./middlewares/error');
const router = require('./routers');

const app = express();

app.use(express.json());

app.use(router);

app.use(error);

module.exports = app;
