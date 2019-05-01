const mysql = require('mysql')

var connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'default',
    password: 'secret',
    database: 'default'
})

module.exports = connection
