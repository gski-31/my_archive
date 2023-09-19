const mongoose = require('mongoose');

// POST => title, content
let postSchema = new mongoose.Schema({
    title: String,
    content: String
});

// let Post = mongoose.model('Post', postSchema);
// module.exports = Post;

module.exports = mongoose.model('Post', postSchema);