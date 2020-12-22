const express = require("express")
const Notification = require("../models/Notification")
const CalendarEvent = require("../models/CalendarEvent")
const router = express.Router()
const db_utils = require("../db_util")

//================= CALENDAR ROUTING ====================================
//     This section is for GET requests for FullCalender Plugin

// ======= MIDDLEWARE ==================================

router.use('/*', async (req, res, next) => {
  console.log("Get CALENDAR request for: "+req.originalUrl);
  // Loading notification number as variable.
  Notification.find({}, function(err, notifications) {
    var notes = notifications.length
    res.locals = {
      page_name: "CONTROL",
      notifications: notes,
    }
    next()
  });
})

// ====== FINAL ROUTING SECTION ===============================

router.get('/new_calendar_event', async (req, res) => { // CALENDAR

  res.render('pages/forms/new_calendar_event.ejs')
})

router.get('/*', async (req, res) => { // CALENDAR
  console.log("CALENDAR REQUEST")
  CalendarEvent.find({}, function(err, c_events) {
    res.locals = {
      calendar_events : c_events,
    }
    res.render('pages/util/month_calendar.ejs')
  });

})

module.exports = router
