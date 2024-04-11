const express = require("express");
const router = express.Router();
const {createEvent, getEvents, getEventByID, getEvent,deleteEvent} = require('../controllers/eventController.js');
const { protect, admin } = require("../middleware/authMiddleware.js");

router.route('/').post(createEvent).get(getEvents);
router.route('/:id/profile').get(getEvent);
router.route('/:id').get(getEventByID);

module.exports= router;
