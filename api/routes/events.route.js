const express = require('express')
const router = express.Router()
const { createEvent, updateEvent } = require('../controllers/eventController')

// create event 
router.post('/create-event', createEvent)
// update event 
router.put('/:id', updateEvent)

module.exports = router