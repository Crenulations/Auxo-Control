const express = require("express")
const Notification = require("../models/Notification")
const CalendarEvent = require("../models/CalendarEvent")
const JournalEntry = require("../models/JournalEntry")
const router = express.Router()
const db_utils = require("../db_util")


router.use(express.json()); // to support JSON-encoded bodies
router.use(express.urlencoded()); // to support URL-encoded bodies

// This router is used for POST requests

router.post('/delete_notification', (req, res) => {
  console.log("Deleting notification!", req.body.post_id);
  Notification.deleteOne({
    _id: req.body.post_id
  }, function(err) {
    if (err) console.log(err);
    console.log("Successful deletion");
      res.redirect('back');
  })
})

router.post('/new_calendar_event', (req, res) => {
  var post_r = req.body;
  var start_date = db_utils.createDate(req.body.start_date,parseInt(post_r.start_hours),parseInt(post_r.start_minutes),post_r.start_am_pm)
  var end_date = ""
  if(post_r.end_date != "")
    var end_date = db_utils.createDate(req.body.end_date,parseInt(post_r.end_hours),parseInt(post_r.end_minutes),post_r.end_am_pm)

  const event = new CalendarEvent({
    title: req.body.title,
    start_date: start_date,
    end_date: end_date,
    color: req.body.color,
  })
  event.save()
  res.redirect('/');
})

router.post('/new_journal_entry', (req, res) => {
  // Quill text editor stores data in a format called Delta, a strict subset of JSON
  console.log(req.body.journal)
  const entry = new JournalEntry({
    title: req.body.title,
    content: req.body.journal,
    date: new Date(),
  })
  entry.save()
  res.redirect('/journal');
})

router.post('/edit_journal_entry/:journal_id', (req, res) => {
  JournalEntry.findById(req.params.journal_id, function(err, journal) {
    journal.title = req.body.title
    journal.content = req.body.journal
    journal.save()
  });
  res.redirect('/journal');
})

module.exports = router
