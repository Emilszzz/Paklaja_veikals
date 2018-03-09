var express = require('express')
var app = express()
mongoose = require('mongoose'),
mongoUrl = 'mongodb://localhost:27017/inventory2';


app.get('/', function (req, res) {
  res.send('Hello World')
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
