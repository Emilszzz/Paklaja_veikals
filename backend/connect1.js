var express = require('express')
var app = express()
mongoose = require('mongoose'),
mongoUrl = 'mongodb://localhost:27017/veikals';
var users = require('./controllers/users.js')

app.get('/', function (req, res) {
  users.findAll(req, res);
})
app.get('/test', function (req, res) {
  users.test(req, res);
})
app.listen(3000)
mongoose.connect(mongoUrl);
var db = mongoose.connection;
db.on('error', function () {
  throw new Error('unable to connect to database at ' + mongoUrl);
});

/*var server = app.listen(3004, function () {
  console.log('Listening on port 3004...');
});*/
