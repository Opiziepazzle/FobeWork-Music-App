const eventSchema = require('../models/eventModel');

// Create an event
exports.createEvent = async (req, res) => {
  try {
    const { title, location, date, artists } = req.body;
    const event = new eventSchema({ title, location, date, hostId: req.user.id, artists });

    await event.save();
    res.status(201).json({ message: 'Event created', event });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Get all events
exports.getAllEvents = async (req, res) => {
  try {
    const events = await eventSchema.find()
      .populate('artists', 'name genre bio') // Populate artist details
      .populate('hostId', 'name email'); // Populate host details

    res.json(events);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Get a single event by ID
exports.getEventById = async (req, res) => {
  try {
    const event = await eventSchema.findById(req.params.id)
      .populate('artists', 'name genre bio')
      .populate('hostId', 'name email');

    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }
    res.json(event);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Update an event by ID
exports.updateEvent = async (req, res) => {
  try {
    const { title, location, date, artists } = req.body;
    const updatedEvent = await eventSchema.findByIdAndUpdate(
      req.params.id,
      { title, location, date, artists },
      { new: true, runValidators: true }
    );

    if (!updatedEvent) {
      return res.status(404).json({ message: 'Event not found' });
    }
    res.json({ message: 'Event updated', updatedEvent });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Delete an event by ID
exports.deleteEvent = async (req, res) => {
  try {
    const deletedEvent = await eventSchema.findByIdAndDelete(req.params.id);
    if (!deletedEvent) {
      return res.status(404).json({ message: 'Event not found' });
    }
    res.json({ message: 'Event deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
