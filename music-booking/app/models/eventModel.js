const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: String,
  location: String,
  date: Date,
  hostId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  artists: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Artist' }],
});

module.exports = mongoose.model('Event', eventSchema);