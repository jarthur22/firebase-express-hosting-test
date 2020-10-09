const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PersonSchema = new Schema({
    fname: String,
    lname: String,
    age: Number
}, {collection: 'people'});

module.exports = Person = mongoose.model("people", PersonSchema);