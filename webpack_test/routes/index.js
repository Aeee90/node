var express = require('express');
var router = express.Router();
const mysql = require('../config/mysql');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.setHeader('Content-Type', 'html');
  res.redirect('/index.html');
});

router.get('/login', function(req, res, next){
  console.log(mysql);

  mysql.query('SELECT * from member', function(err, rows, fields) {
    if (!err)
      res.send(rows);
    else
      console.log('Error while performing Query.', err);
  });
});

module.exports = router;
