const express = require('express')
const router = express.Router()
const Joi = require('Joi')


const courses = [
    { id : 1, name : 'user1'},
    { id : 2, name : 'user2'},
    { id : 3, name : 'user3'}
]

router.get('/', (req, res) => {
    res.send(courses)
})

module.exports = router;