const Event = require("../models/event");

// create event
const createEvent = async (req, res) => {
  const newEvent = new Event(req.body);
  
  try {
    const savedEvent = await newEvent.save();
    return res.status(201).json(savedEvent);
  } catch (err) {
    return res.status(500).json(err);
  }
};

module.exports = {
  createEvent,
};
