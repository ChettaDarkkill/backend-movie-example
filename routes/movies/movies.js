const express = require('express')
const router = express.Router()
const Joi = require('Joi')
const connection = require('../../config/database')

router.get('/', (req, res) => {
    getAllMovies((moviesList) => {
        if(moviesList.length == 0) {
            res.status(404).send(JSON.stringify({
                message: 'not found'
            }))
        } else {
            res.send(moviesList)
        }
    })
})

router.get('/:id', (req, res) => {
    var id = req.params.id
    getMovieByid(id, ( movie ) => {
        if(movie.length==0) {
            res.status(404).send(JSON.stringify({
                message: "not found"
            }))
        } else {
            res.send(movie)
        }
    })
})

function getMovieByid(id, callback) {
   connection.query(`SELECT * from movies where id  = ${id}`, (err, rows, fields) => {
       if(err) throw err;
       callback(rows)
   })
}
function getAllMovies(callback) {
    connection.query(`SELECT * from movies`,  (err, rows, fields)  => {
        if (err) throw err;
        callback(rows)
    })
}

module.exports = router;