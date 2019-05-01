const connection = require('../../config/database')
class handleMovies {
    getMovieByid(id, callback) {
        connection.query(`SELECT * from movies where id  = ${id}`, (err, rows, fields) => {
            if(err) throw err;
            callback(rows)
        })
    }
    getAllMovies(callback) {
        connection.query(`SELECT * from movies`,  (err, rows, fields)  => {
            if (err) throw err;
            callback(rows)
        })
    }
}

module.exports = handleMovies