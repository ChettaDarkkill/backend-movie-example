const express = require('express')
const router = express.Router()
const Joi = require('Joi')


const courses = [
    { id : 1, name : 'Avengers Endgame', img : 'https://cdn.majorcineplex.com/uploads/movie/2584/thumb_2584.jpg'},
    { id : 2, name : 'Teen Spirit', img : 'https://cdn.majorcineplex.com/uploads/movie/2580/thumb_2580.jpg'},
    { id : 3, name : 'Hellboy', img : 'https://cdn.majorcineplex.com/uploads/movie/2441/thumb_2441.jpg'},
    { id : 4, name : 'Dumbo', img : 'https://cdn.majorcineplex.com/uploads/movie/2472/thumb_2472.jpg'}
]

router.get('/', (req, res) => {
    res.send(courses)
})

module.exports = router;