var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views', './pug_files');

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.render('staticimg');
});
app.listen(8080);