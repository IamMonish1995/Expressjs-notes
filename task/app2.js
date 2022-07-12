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
mongoose.connect('mongodb://localhost/plantsdb');
var plantSchema = mongoose.Schema({
    Id: Number,
    Description: String,
    Latitude: Number,
    Longitude: Number,
    GISPolygon: Number
});
var plant = mongoose.model("plant", plantSchema);

app.set('view engine', 'pug');
app.set('views', './pugs');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/register', function (req, res) {
    
    var newPlant = new plant({
        Id: req.body.Id,
        Description: req.body.Dec,
        Latitude: req.body.Lat,
        Longitude: req.body.Lon,
        GISPolygon: null
    });
    newPlant.save(function (err, plant) {
        if (err)
            throw err;
        else {
            res.send(" Record added ");
        }
    });
});

app.get("/plantindex", (req, res) => {
    console.log("plant index called");
    plant.find(function (err, result) {
        // res.send(response);
        res.json(result)
    });
})

app.listen(8080);