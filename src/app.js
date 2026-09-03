const express = require('express');
const pessoaRouter = require('./routes/pessoa.router.js');
const logMiddleware = require('./middlewares/log.middleware.js');

const app = express();

app.use(express.json());

app.use(logMiddleware)


app.use('/', pessoaRouter);

module.exports = app;