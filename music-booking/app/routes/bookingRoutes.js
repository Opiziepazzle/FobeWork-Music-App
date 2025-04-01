const express = require('express');
const { createBooking, getAllBookings,getBookingById,updateBooking,deleteBooking} = require('../controllers/bookingController');
const checkAuth = require('../middleware/App.middleware');

const router = express.Router();

router.post('/', checkAuth, createBooking);
router.get('/', getAllBookings);
router.get('/:id', getBookingById);
router.put('/:id', checkAuth, updateBooking);
router.delete('/:id', checkAuth, deleteBooking);

module.exports = router;
