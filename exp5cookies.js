var express = require('express');
var app = express();

var cookieParser = require('cookie-parser');
app.use(cookieParser());

app.get('/', function (req, res) {
   // res.cookie('name', 'express').send('cookie set'); //Sets name = express
   
    res.clearCookie('name'); // clears cookie
    res.send('cookie name cleared');
});

    
app.listen(8080);