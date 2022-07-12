var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.set('view engine', 'pug');
app.set('views', './pug_files');


app.get('/', function (req, res) {
    res.render('form');
});


// for parsing application/json
app.use(bodyParser.json());

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true }));
//form-urlencoded

// for parsing multipart/form-data
// app.use(upload.array());
app.use(express.static('public'));

app.post('/', function (req, res) {
    console.log(req.body);
 //   res.send("recieved your request!");
    res.render('profile',
       {
        user:{name: req.body.fname,
        age:req.body.age}
    })
});
app.listen(8080);