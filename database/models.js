const connection = require('./db.js');

var addUser = (req, callback) => {
  connection.query('INSERT INTO users (firstName, lastName, userName, userPassword) VALUES (?, ?, ?, ?)',
  [req.body.firstName, req.body.lastName, req.body.userName, req.body.userPassword], (error, results) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, req.body);
    }
  });
};

var getUser = (req, callback) => {
  connection.query('SELECT * FROM users WHERE userName = ? AND userPassword = ?',
  [req.query.userName, req.query.userPassword], (error, results) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, results);
    }
  });
};

var postATrip = (req, callback) => {
  connection.query('INSERT INTO trips (departureAirport, destination, travelDate, departureTime, arrivalTime, flightNumber, airline, userId) VALUES (?, ?, ?, ?, ?, ?, ?, ?)'
  , [req.body.departureAirport, req.body.destination, req.body.travelDate, req.body.departureTime, req.body.arrivalTime, req.body.flightNumber, req.body.airline, req.body.userId],
    (error, results) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, results);
    }
  });
};

var getTrips = (req, callback) => {
  connection.query('SELECT * FROM trips WHERE userId = ?',
  [req.query.userId], (error, results) => {
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