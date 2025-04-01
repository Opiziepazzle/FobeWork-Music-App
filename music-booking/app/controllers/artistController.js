const artistSchema = require('../models/artistModel');

// Create an artist
exports.createArtist = async (req, res) => {
  try {
    const { genre, bio, availableDates } = req.body;
    const artist = new artistSchema({ userId: req.user.id, genre, bio, availableDates });
    
    await artist.save();
    res.status(201).json({ message: 'Artist profile created' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Get all artists
exports.getArtists = async (req, res) => {
  try {
    const artists = await artistSchema.find().populate('userId', 'name email');
    res.json(artists);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Get a single artist by ID
exports.getArtistById = async (req, res) => {
  try {
    const artist = await artistSchema.findById(req.params.id).populate('userId', 'name email');
    if (!artist) {
      return res.status(404).json({ message: 'Artist not found' });
    }
    res.json(artist);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Update an artist by ID
exports.updateArtist = async (req, res) => {
  try {
    const { genre, bio, availableDates } = req.body;
    const updatedArtist = await artistSchema.findByIdAndUpdate(
      req.params.id,
      { genre, bio, availableDates },
      { new: true, runValidators: true }
    );
    
    if (!updatedArtist) {
      return res.status(404).json({ message: 'Artist not found' });
    }
    res.json({ message: 'Artist updated', updatedArtist });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Delete an artist by ID
exports.deleteArtist = async (req, res) => {
  try {
    const deletedArtist = await artistSchema.findByIdAndDelete(req.params.id);
    if (!deletedArtist) {
      return res.status(404).json({ message: 'Artist not found' });
    }
    res.json({ message: 'Artist deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
