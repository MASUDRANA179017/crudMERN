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
        required: true
    },
    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
});

// Create the Registrar model
const BlogPost = mongoose.model('User', blogPostSchema);

module.exports = BlogPost;
