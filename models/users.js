/**
 * Created by vaibhav on 19-01-2017.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var userSchema = new Schema({
    userame: String,
    name: String,
    email: String,
    contact: Number,
    created_at: Date,
    updated_at: Date
},
    { collection: 'UserRecords' });

var user = mongoose.model('user', userSchema);

exports.userDetails=function(req,res){

    var userData=new user(req.body);

    userData.save({},function(err,data){
        if(!err){
            res.sendStatus(200);
        }
        else{
            res.send(err);
        }
    })
};