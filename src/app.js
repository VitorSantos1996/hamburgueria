'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

const app = express();
const indexRoutes = require('./routes/index-route');
const productRoutes = require('./routes/products-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use('/', indexRoutes);
app.use('/products', productRoutes);

module.exports = app;