const asyncHandler = require("../middleware/asyncHandler");
const Event = require("../models/eventModel");

const createEvent = asyncHandler(async (req, res) => {
    const {title, description, location} = req.body;

  const event = await Event.create({title, description, location});

  if (event) {
    res.status(201).json({
        _id: event._id,
        title: event.title,
        description: event.description,
        location: event.location,
    });
  } else {
    res.status(400);
    throw new Error("Invalid event data");
  }
});

const getEvents = asyncHandler(async (req, res) => {
  const event = await Event.find({});
  res.status(200).json(event);
});

const getEvent = asyncHandler(async (req, res) => {
  const event = await Event.findById(req.params.id);

  if (event) {
    res.status(200).json({
        _id: event._id,
        title: event.title,
        description: event.description,
        location: event.location,
    });
  } else {
    res.status(404);
    throw new Error("event not found");
  }
});

const getEventByID = asyncHandler(async (req, res) => {
  const event = await Event.findById(req.params.id);
  if (event) {
    res.status(200).json(event);
  } else {
    res.status(404);
    throw new Error("event not found");
  }
});

const deleteEvent = asyncHandler(async (req, res) => {
  const event = await Event.findById(req.params.id);
  if (event) {
    await Event.deleteOne({ _id: event._id });
    res.status(200).json({ message: "event deleted successfully" });
  } else {
    res.status(404);
    throw new Error("event not found");
  }
});

module.exports= {createEvent, getEvents, getEventByID, getEvent,deleteEvent};
