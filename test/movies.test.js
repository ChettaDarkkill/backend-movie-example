const handleMovies = require('../routes/movies/moviesClass')
const connection = require('../config/database')
let handlers = new handleMovies()


test('the movies must be empty', () => {
  connection.connect()
  function callback(data) {
    expect(data.length).toBe(4)
  }
  handlers.getAllMovies(callback)
  connection.end()
});

// test('the movies must be one when call api get movies by id', () => {
//   connection.connect()
//     function callback(data) {
//       expect(data.length).toBe(1)
//     }
//     handlers.getMovieByid(1, callback)
//   connection.end()

// })
