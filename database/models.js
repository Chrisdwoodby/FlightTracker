const connection = require('./db.js');

var addUser = (req, callback) => {
  connection.query('INSERT INTO users (userName, userPassword) VALUES (?, ?)', [req.body.userName, req.body.userPassword], (error, results) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, req.body);
    }
  });
};

var getUser = (req, callback) => {
  connection.query('SELECT * FROM users WHERE userName = ?', [req.query.userName], (error, results) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, results);
    }
  });
};


// var getUser = (req, callback) => {
//   connection.query('SELECT userName FROM users WHERE userName = ? AND userPassword = ?', [req.params.userName, req.params.userPassword], (error, results) => {
//     if (error) {
//       callback(error, null);
//     } else {
//       callback(null, results);
//     }
//   });
// };

module.exports = {
  addUser,
  getUser
};