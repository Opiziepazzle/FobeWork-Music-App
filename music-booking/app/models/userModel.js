const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true, required: true },
  password: String,
  role: { type: String, enum: ['artist', 'host', 'admin'], default: 'host' },
});

module.exports = mongoose.model('User', userSchema);