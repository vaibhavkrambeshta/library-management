/**
 * Created by vaibhav on 19-01-2017.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var bookSchema = new Schema({
    name: String,
    auther: String,
    isAvailable: Boolean,
    created_at: Date,
    updated_at: Date
},{ collection: 'BookRecords' });

var book = mongoose.model('book', bookSchema);

exports.bookDetails=function(req,res){

    var bookData=new book(req.body);

    bookData.save({},function(err,data){
        if(!err){
            res.sendStatus(200);
        }
        else{
            res.send(err);
        }
    })
};
