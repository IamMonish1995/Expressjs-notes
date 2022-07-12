var express = require('express');
var bodyParser = require('body-parser');
var app = express();

// CORS CONFIG STARTS HERE
var cors = require('cors'); // npm install cors

app.use(cors());
var allowCrossDomain = function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
};
app.use(allowCrossDomain);
// CORS CONFIG ENDS HERE


var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/monishdb');
var userSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    number: Number,
    state: String,
    city: String,
});
var user = mongoose.model("taskexp", userSchema);

app.set('view engine', 'pug');
app.set('views', './pugs');

// Get req
app.get('/register', function (req, res) {
    res.render('register');
});

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/register', function (req, res) {
    
    var newUser = new user({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        number: req.body.number,
        state: req.body.state,
        city: req.body.city,
    });
    newUser.save(function (err, user) {
        if (err)
            throw err;
        else {
            res.send(" Record added " + "<br>" + " Your username " + req.body.email + "<br>" + " Your Password is " + req.body.password + "<a href=/login > login here </a>");
        }
    });
});

app.get('/login', function (req, res) {
    res.render('login');
});

app.get("/viewall", (req, res) => {
    console.log("View all called");
    user.find(function (err, result) {
        // res.send(response);
        res.json(result)
    });
})

app.post('/login', function (req, res) {
    loginid = req.body.email;
    loginpass = req.body.password;

    user.findOne({ email: loginid }, function (err, response) {
        if (err) throw err;
        if (loginid == "admin" && loginpass == "admin") {
            user.find(function (err, response) {
                res.send(response);
            });
            // res.send("hello admin")
        } else {
            if (response !== null) {
                if (loginid == response.email && loginpass == response.password) {
                    res.render('update', {
                        name: response.name,
                        email: response.email,
                        password: response.password,
                        number: response.number,
                        state: response.state,
                        city: response.city
                    });

                } else {
                    res.send("Password is incorrect" + `<br>` + `<a href="/login">Try again</a>`);
                }
            } else {
                res.send("Email is incorrect" + `<br>` + `<a href="/login">try again</a>`);
            }
        }
    });
});

app.post('/editprofile', function (req, res) {
    let useremail = req.body.email;
    user.findOneAndUpdate({ email: useremail }, {
        name: req.body.name,
        password: req.body.password,
        number: req.body.number,
        state: req.body.state,
        city: req.body.city
    }, function (err, response) {
        if (err) throw err;
        else res.send("hello " + req.body.name + " !! Your Profile updated Successfully");    
    });
    
});

app.post('/deleteprofile', function (req, res) {
    let useremail = req.body.email;
    user.findOneAndRemove({ email: useremail }, {
    }, function (err, response) {
        if (err) throw err;
        else res.send("Profile Deleted Successfully");    
    });
    
});

app.listen(8080);