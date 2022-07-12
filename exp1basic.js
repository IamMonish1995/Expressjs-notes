var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send("<h1>Hello world!</h1>");
});

app.get('/abc', function (req, res) {
    res.send("<h1>Hello express ABC </h1>");
});

app.post('/', function (req, res) {
    res.send("<h1>Hello express post req </h1>");
});
app.listen(8080);
