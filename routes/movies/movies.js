const express = require('express')
const router = express.Router()
const Joi = require('Joi')
const connection = require('../../config/database')

router.get('/', (req, res) => {
    getAllMovies((moviesList) => {
        res.send(moviesList)
    })
})

function getAllMovies(callback) {
    connection.query('SELECT * from movies',  (err, rows, fields)  => {
        if (err) throw err;
        callback(rows)
    })
}

module.exports = router;