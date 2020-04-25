var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello World!\n');
});

app.get('/sahasra', function (req, res) {
  res.send('Hello Sahasra Nelakurthi!\n');
});

app.get('/sahasra-rajendra', function (req, res) {
  res.send('Hello SahasraRajendra Nelakurthi!\n');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

