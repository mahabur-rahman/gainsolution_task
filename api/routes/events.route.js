const express = require('express')
const router = express.Router()
const { createEvent, updateEvent, deleteEvent } = require('../controllers/eventController')

// create event 
router.post('/create-event', createEvent)
// update event 
router.put('/:id', updateEvent)
// delete event 
router.delete('/:id', deleteEvent)

module.exports = router