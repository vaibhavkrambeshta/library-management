/**
 * Created by vaibhav on 19-01-2017.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var adminSchema = new Schema({
    username: String,
    name: String,
    email: { type: String, required: true, unique: true },
    contact: Number,
    password: { type: String, required: true },
    admin: Boolean,
    created_at: Date,
    updated_at: Date
},
    { collection: 'AdminRecords' });

var admin = mongoose.model('admin', adminSchema);

exports.adminDetails=function(req,res){

    var adminData=new admin(req.body);

    adminData.save({},function(err,data){
        if(!err){
            res.sendStatus(200);
        }
        else{
            res.send(err);
        }
    })
};
