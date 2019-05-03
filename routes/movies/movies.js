const express = require('express')
const router = express.Router()
const Joi = require('Joi')
const handleMovies = require('./moviesClass')
const check = require('../../middleware/jwt')

let handlers = new handleMovies()
router.get('/', check.checkToken, (req, res) => {
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

router.get('/:id', check.checkToken, (req, res) => {
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