const express = require('express')
const router = express.Router()
const Joi = require('Joi')
const handleMovies = require('./moviesClass')

let handlers = new handleMovies()
router.get('/', (req, res) => {
    handlers.getAllMovies((moviesList) => {
        if(moviesList.length == 0) {
            res.status(404).json({
                message: 'not found'
            })
        } else {
            res.send(moviesList)
        }
    })
})

router.get('/:id', (req, res) => {
    var id = req.params.id
    handlers.getMovieByid(id, ( movie ) => {
        if(movie.length==0) {
            res.status(404).json({
                message: "not found"
            })
        } else {
            res.send(movie)
        }
    })
})

module.exports = router;