const mongoose = require('mongoose');

let campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    location: String,
    description: String
});

module.exports = mongoose.model('Campground', campgroundSchema);