var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views', './pug_files');

app.get('/components', function (req, res) {
    res.render('content');
});

app.listen(8080);