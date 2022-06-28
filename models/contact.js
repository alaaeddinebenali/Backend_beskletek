var mongoose = require('mongoose')
var Schema = mongoose.Schema

var Contact = new Schema({
    fullName: String,
    phone: Number
});

module.exports = mongoose.model('contacts', Contact);
