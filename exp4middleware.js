var express = require('express');
var app = express();

//First middleware before response is sent
app.use('*',function (req, res, next) {
    console.log("Start");
    next();
});

//Middleware function to log request protocol
app.use('/abc', function (req, res, next) {
    console.log("appuse /abc " + Date.now());
    next();
});

// Route handler that sends the response
app.get('/abc', function (req, res) {
    res.send('app get abc' + Date.now());
});
//Middleware function to log request protocol
app.use('/xyz', function (req, res, next) {
    console.log("app use xyz " + Date.now());
    next();
});

// Route handler that sends the response
app.get('/xyz', function (req, res) {
    res.send('app get xyz' + Date.now());
});

app.listen(8080);