const connection = require('./db.js');

var addUser = (req, callback) => {
  connection.query('INSERT INTO users (userName, userPassword) VALUES (?, ?)', [req.body.userName, req.body.userPassword], (error, results) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, req.body)
    }
  })
}

module.exports = {
  addUser
};