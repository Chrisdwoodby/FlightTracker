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
  connection.query('SELECT * FROM users WHERE userName = ? AND userPassword = ?', [req.query.userName, req.query.userPassword], (error, results) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, results);
    }
  });
};

var postATrip = (req, callback) => {
  connection.query('INSERT INTO trips (destination, travelDate, userId) VALUES (?, ?, ?)', [req.body.destination, req.body.travelDate, req.body.userId], (error, results) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, results);
    }
  });
};

var getTrips = (req, callback) => {
  connection.query('SELECT * FROM trips WHERE userId = ?', [req.query.userId], (error, results) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, results)
    }
  });
};

module.exports = {
  addUser,
  getUser,
  postATrip,
  getTrips
};