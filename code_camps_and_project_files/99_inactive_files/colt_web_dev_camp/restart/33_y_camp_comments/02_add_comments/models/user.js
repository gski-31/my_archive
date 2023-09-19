const mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    name: String,
    image: String,
    location: String,
    description: String
});

module.exports = mongoose.model('User', userSchema);