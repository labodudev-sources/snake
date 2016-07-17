var express = require('express');
var app     = express();
var path    = require('path');

app.use(express.static('app'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname+'/app/view/index.html'));
});

app.listen(80, function () {
  console.log('Snake app listening on port 80!');
});
