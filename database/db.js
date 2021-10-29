var mysql = require('mysql');
var dbConfig = require('./db.config.js');

var connection = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
});

connection.connect((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Successfully connected to the database.");
  }
});

module.exports = connection;
