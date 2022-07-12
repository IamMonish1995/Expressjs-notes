var express = require('Express');
var app = express();

app.get('/:fname/:email/:number([0-9]{10})', (req, res) => {
    res.send("parsing url data from GET method " + req.params.fname + " " + req.params.email + " " + req.params.number)
});

//Other routes here
app.get('*', function (req, res) {
    res.send('404, Page not found');
});
app.listen(8080);