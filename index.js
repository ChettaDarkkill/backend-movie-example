const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded( { extended: true } ))
app.use(express.static('public'))

const courses = [
    {id : 1, course: "course1"},
    {id : 2, course: "course2"},
    {id : 3, course: "course3"},
]

app.get('/', (req, res) => {
    return res.send(courses)
})


const port = process.env.port || 5000
app.listen(port, () => {
    console.log(`app is listen on port ${port} ... `)
})