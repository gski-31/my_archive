const mongoose = require('mongoose');

let campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    location: String,
    description: String,
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }]
});

module.exports = mongoose.model('Campground', campgroundSchema);