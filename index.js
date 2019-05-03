const express = require('express')
const app = express()
const check = require('./middleware/jwt')

const movies = require('./routes/movies/movies')
const users = require('./routes/users/users')

app.use(express.json())
app.use(express.urlencoded( { extended: true } ))


app.use('/api/movies', check.checkToken, movies)
app.use('/api/users', users)

const port = process.env.port || 5000
app.listen(port, () => {
    console.log(`app is listen on port ${port} ... `)
})