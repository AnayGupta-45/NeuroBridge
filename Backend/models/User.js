const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    googleId: { type: String },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String },
    role: { type: String, enum: ['user', 'admin'], default: 'user' },
});

module.exports = mongoose.model('User', UserSchema);
