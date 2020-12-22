var schedule = require('node-schedule');
const Notification = require("./models/Notification")
const CalendarEvent = require("./models/CalendarEvent")

var jobs = []

function loadFutureNotifications(){
  CalendarEvent.find({}, function(err, c_events) {
    c_events.forEach(function(event){
      console.log("Creating job -- "+event.title+"  at  "+event.start_date)
      var job = schedule.scheduleJob(event.start_date, function(){
        console.log("Executing scheduled job at ==>  "+new Date());
        console.log("Loading Notification "+event.title)
        newNotification(event.title,event.title)
      });
      jobs.push(job)
    })
  });
}

function modifyDate(date,days,hours,minutes,seconds){
  var d = new Date(date);

  // DAYS
  d.setDate(d.getDate()+days)
  // HOURS
  d.setHours(d.getHours()+hours)
  // MINUTES
  d.setMinutes(d.getMinutes()+minutes)
  // SECONDS
  d.setSeconds(d.getSeconds()+seconds)

  return d
}

function newNotification(title,content) {
  const post = new Notification({
    title: title,
    content: content,
    date: Date.now()
  })
  post.save()
}

module.exports = {loadFutureNotifications}
