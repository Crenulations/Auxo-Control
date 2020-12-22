const mongoose = require("mongoose")

const schema = mongoose.Schema({
	title: String,
  content: Object,
  date: Date,
  last_edit: Date,
},{ collection : 'Journals' })

module.exports = mongoose.model("JournalEntry", schema)
