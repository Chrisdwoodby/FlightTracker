var mysql = require('mysql');
var dbConfig = require('./db.config.js');

var pool = mysql.createPool({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
});

pool.connect((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Successfully connected to the database.");
  }
});

module.exports = pool;
