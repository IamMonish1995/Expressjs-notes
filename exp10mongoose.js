var express = require('express');
var app = express();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/monishdb');

var employeeSchema = mongoose.Schema({
    ename: String,
    salary: Number,
});
var person = mongoose.model("employee", employeeSchema);

// app.get('/person', (req, res) => {
//     var newPerson = new person({
//         ename: "monish from mongoose",
//         salary: 1000000,
//     });

//     newPerson.save(function (err, person) {
//         if (err)
//             throw err;
//         else {
//             console.log("record added");
//          }
//     });
// });

app.get('/people', function (req, res) {
    // person.find(function (err, response) {
    //     res.json(response);
    //     console.log(response);
    // });

    // person.find({ ename: "Ayush", age: 20 },
    //     function (err, response) {
    //         console.log(response);
    //     });

    person.find({ ename: "monish from mongoose" }, { ename: "monish from mongoose" }, function (err, response) {
        console.log(response);
    });
});

app.listen(8080);