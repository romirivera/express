const express = require('express');
const morgan = require('morgan');
const app = express();

const router = require('../routes/user.routes');
//funcion middleware

app.use(express.json());
app.use(morgan('dev'));

app.use('/', router);

module.exports = app;
