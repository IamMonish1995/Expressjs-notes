var express = require('Express');
var app = express();

app.set('view engine', 'pug');
app.set('views', './pug_files');

app.get('/template', function (req, res) {
    res.render('file1');
});

app.listen(8080);