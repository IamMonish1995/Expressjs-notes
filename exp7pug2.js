var express = require('Express');
var app = express();

app.set('view engine', 'pug');
app.set('views', './pug_files');

app.get('/template', function (req, res) {
    res.render('file2', {
        name: "TutorialsPoint",
        url: "http://www.tutorialspoint.com"
    });
});

app.listen(8080);