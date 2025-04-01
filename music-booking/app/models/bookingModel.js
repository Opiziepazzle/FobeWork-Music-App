const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  eventId: { type: mongoose.Schema.Types.ObjectId, ref: 'Event' },
  artistId: { type: mongoose.Schema.Types.ObjectId, ref: 'Artist' },
  status: { type: String, enum: ['pending', 'confirmed', 'completed'], default: 'pending' },
});

module.exports = mongoose.model('Booking', bookingSchema);