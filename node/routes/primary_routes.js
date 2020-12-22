const express = require("express")
const Notification = require("../models/Notification") // new
const JournalEntry = require("../models/JournalEntry") // new
const router = express.Router()

//================= PRIMARY ====================================
//================= ROUTING ====================================
//     This section is for GET request of the REST API

// ======= MIDDLEWARE ==================================

// Load header variables from database
router.use('/*', async (req, res, next) => {
  console.log("Get request for: "+req.originalUrl)
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

// Loading static files (CSS,JS)
router.use(express.static('public'))


// ====== FINAL ROUTING SECTION ===============================

router.get('/$', async (req, res) => { // INDEX PAGE
  res.render('pages/index.ejs', {
    page_name: "Home"
  })
})

router.get('/inbox*', (req, res) => { // INBOX
  Notification.find({}, function(err, notifications) {
    res.render('pages/inbox.ejs', {
      inbox_items: notifications
    })
  });
})

//        == JOURNAL ROUTES ==
router.get('/journal$', (req, res) => {
  JournalEntry.find({}).sort('-date').exec(function(err, journals) {
    res.render('pages/journal_main.ejs', {
      journals: journals
    })
  });
})

router.get('/journal/:journal_id', (req, res) => { // EDIT JOURNAL
  JournalEntry.findById(req.params.journal_id, function(err, journal) {
    res.render('pages/forms/edit_journal_entry.ejs', {
      journal: journal
    })
  });
})

//        == DATA LOG ROUTES ==
router.get('/data_log', (req, res) => {
  res.render('pages/data_log_main.ejs')
})

// Make favico fuck off
router.get('/favico*', (req, res) => {})

router.get('/*', (req, res) => { // ALL OTHER ROUTES
  console.log('pages' + req.url)
  res.render('pages' + req.url)
})

module.exports = router
