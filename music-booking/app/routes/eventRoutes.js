const express = require('express');
const router = express.Router();
const { createEvent, getAllEvents, getEventById, updateEvent, deleteEvent } = require('../controllers/eventController');
const checkAuth = require('../middleware/App.middleware');

router.post('/', checkAuth, createEvent);
router.get('/', getAllEvents);
router.get('/:id', getEventById);
router.put('/:id', checkAuth, updateEvent);
router.delete('/:id', checkAuth, deleteEvent);

module.exports = router;
