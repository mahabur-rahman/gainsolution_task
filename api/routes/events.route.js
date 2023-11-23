const express = require('express')
const router = express.Router()
const { createEvent } = require('../controllers/eventController')

// create event 
router.post('/create-event', createEvent)

module.exports = router