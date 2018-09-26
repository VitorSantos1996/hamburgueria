'use strict'

const express = require('express');
const router = express.Router();

router.route('/')
    .post((req, res, next) => res.status(200).send(req.body))
    .delete((req, res, next) => res.status(200).send(req.body))

router.route('/:id')
    .put((req, res, next) => {
        const id = req.params.id;
        res.status(201).send({
            id: id,
            item: req.body
        });
    })

module.exports = router;