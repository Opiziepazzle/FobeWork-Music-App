const mongoose = require('mongoose');

const artistSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  genre: String,
  bio: String,
  availableDates: [Date],
});

module.exports = mongoose.model('Artist', artistSchema);