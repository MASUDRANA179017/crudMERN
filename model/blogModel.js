const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the Registrar schema
const blogPostSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    image: {
        type: String,
    },
    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
});

// Create the Registrar model
const BlogPost = mongoose.model('BlogPost', blogPostSchema);

module.exports = BlogPost;




