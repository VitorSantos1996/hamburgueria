'use strict'

const express = require('express');
const router = express.Router();

router.route('/')
    .get((req, res, next) => res.status(200).send({
        Title: "Node Hamburgueria API",
        version: "0.0.0"
    }))

module.exports = router;