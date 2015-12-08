var express = require('express');
var net = require('net');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/api',function(req,res,next){
  var client = net.connect({path:'./demo_socket'}, function() {
      console.log('connected to server!');
      client.write('I am Peter');
  });
  client.on('data', function(data) {
      console.log('DATA: ' + data);
      res.end(data);
      client.end();
  });
  client.on('end', function() {
      console.log('Connection closed');
  });

});
router.get('/api2',function(req,res,next){
  res.json('{name:peter}');
});
module.exports = router;
