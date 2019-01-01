module.exports = (function(){
  const mysql = require('mysql');
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'waco',
    password: 'waco',
    port: '3306',
    database: 'waco_member'
  }); 

  connection.connect();

  return connection;
})();