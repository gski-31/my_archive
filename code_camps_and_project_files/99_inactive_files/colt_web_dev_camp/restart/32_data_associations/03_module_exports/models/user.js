const mongoose = require('mongoose');

// USER => email, name
let userSchema = new mongoose.Schema({
    email: String,
    name: String,
    // SETUP REFERENCE SCHEMA
    posts: [{
        type: mongoose.Schema.Types.ObjectId, // Array of Mongoose Object IDs belonging to a post
        ref: 'Post'
    }]
});

// let User = mongoose.model('User', userSchema);
// module.exports = User;

module.exports = mongoose.model('User', userSchema);