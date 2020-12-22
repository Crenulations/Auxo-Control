const mongoose = require("mongoose")

const schema = mongoose.Schema({
	title: String,
	content: String,
  date: Date,
},{ collection : 'Notifications' })

module.exports = mongoose.model("Notification", schema)
