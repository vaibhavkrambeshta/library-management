var express = require('express');
var app = express();
var path = require('path');
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var contactUs       =  require("./models/admin");
var addBook         =  require("./models/book");
var issueBook       =  require("./models/users");
//connect to mongodb
// var url = 'mongodb://localhost:27017/test';
// MongoClient.connect(url, function(err, db) {
//     assert.equal(null, err);
//     console.log("Connected correctly to server.");
//     db.close();
// });
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/library_database');

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
app.use('/', express.static(path.join(__dirname, 'public')));

app.listen(3000);



app.post('/email',function(req,response){

    emailExistence.check(req.body.EMAIL,function(err,res){
        if(!err){
            response.send(res);
        }
        else{
            response.send(err);
            console.log(err);
        }

    })
});



app.post('/assign-book',book.bookDetails);
//app.post('/user',user.userDetails);
app.post('/adminSignup',admin.adminDetails);