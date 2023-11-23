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

// update event
const updateEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    
    if (event.username === req.body.username) {
      try {
        const updatedEvent = await Event.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );

        return res.status(200).json(updatedEvent);
      } catch (err) {
        return res.status(500).json(err);
      }
    } else {
      return res.status(401).json("You can update only your Event!");
    }
  } catch (err) {
    return res.status(500).json(err);
  }
};

module.exports = {
  createEvent,
  updateEvent,
};
