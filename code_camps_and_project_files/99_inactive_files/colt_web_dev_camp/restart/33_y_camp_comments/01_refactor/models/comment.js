const mongoose = require('mongoose');

let commentSchema = new mongoose.Schema({
    name: String,
    image: String,
    location: String,
    description: String
});

module.exports = mongoose.model('Comment', commentSchema);