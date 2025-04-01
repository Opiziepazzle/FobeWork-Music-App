const bookingSchema = require('../models/bookingModel');

// Create a booking
exports.createBooking = async (req, res) => {
  try {
    const { eventId, artistId } = req.body;
    const booking = new bookingSchema({ eventId, artistId });

    await booking.save();
    res.status(201).json({ message: 'Booking created', booking });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Get all bookings
exports.getAllBookings = async (req, res) => {
  try {
    const bookings = await bookingSchema.find()
      .populate('eventId', 'name date location') // Populate event details
      .populate('artistId', 'name genre'); // Populate artist details

    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Get a single booking by ID
exports.getBookingById = async (req, res) => {
  try {
    const booking = await bookingSchema.findById(req.params.id)
      .populate('eventId', 'name date location')
      .populate('artistId', 'name genre');

    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }
    res.json(booking);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Update a booking by ID
exports.updateBooking = async (req, res) => {
  try {
    const { eventId, artistId } = req.body;
    const updatedBooking = await bookingSchema.findByIdAndUpdate(
      req.params.id,
      { eventId, artistId },
      { new: true, runValidators: true }
    );

    if (!updatedBooking) {
      return res.status(404).json({ message: 'Booking not found' });
    }
    res.json({ message: 'Booking updated', updatedBooking });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Delete a booking by ID
exports.deleteBooking = async (req, res) => {
  try {
    const deletedBooking = await bookingSchema.findByIdAndDelete(req.params.id);
    if (!deletedBooking) {
      return res.status(404).json({ message: 'Booking not found' });
    }
    res.json({ message: 'Booking deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
