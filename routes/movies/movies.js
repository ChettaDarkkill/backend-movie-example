const express = require('express')
const router = express.Router()
const Joi = require('Joi')
const connection = require('../config/database')

router.get('/', (req, res) => {
    connection.query('SELECT * from movies', function (err, rows, fields) {
        if (err) throw err;
        res.send(rows)
    })
})



module.exports = router;