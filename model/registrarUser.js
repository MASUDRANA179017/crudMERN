const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the Registrar schema
const registrarSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    phone: {
        type: String,
        required: true,
        trim: true
    },
    registrationDate: {
        type: Date,
        default: Date.now
    }
});

// Create the Registrar model
const User = mongoose.model('User', registrarSchema);

module.exports = User;
