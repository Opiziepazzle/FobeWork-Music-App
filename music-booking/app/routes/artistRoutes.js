const express = require('express');
const router = express.Router();
const { createArtist, getArtists, getArtistById, updateArtist, deleteArtist } = require('../controllers/artistController');
const checkAuth = require('../middleware/App.middleware');


router.post('/', checkAuth, createArtist);
router.get('/', getArtists);
router.get('/:id', getArtistById);
router.put('/:id', checkAuth, updateArtist);
router.delete('/:id', checkAuth, deleteArtist);

module.exports = router;
