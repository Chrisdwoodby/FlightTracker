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
    setTimeout(handleDisconnect, 2000);
  } else {
    console.log("Successfully connected to the database.");
  }
});

connection.on('error', function(err) {
    console.log('db error', err);
    if(err.code === 'PROTOCOL_CONNECTION_LOST') { 
      handleDisconnect();                         
    } else {                                      
      throw err;                                  
    }
  });
}

module.exports = connection;
