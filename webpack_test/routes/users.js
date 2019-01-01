var express = require('express');
var router = express.Router();

import User from '../model/user';

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

const datas = {};
datas[sps1122] = new User('sps1122', 'Aeee', 'sps1122@naver.com');

router.get('/select/:id', function(req, res, next){
  res.send(datas[id].getUsername() + " : " + datas[id].getEmail())
});

module.exports = router;
