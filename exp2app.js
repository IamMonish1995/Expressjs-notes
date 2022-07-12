var express = require('Express');
var app = express();

var file = require('./exp2router.js');

//both index.js and things.js should be in same directory
app.use('/router', file);

app.listen(8080);