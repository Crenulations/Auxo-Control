const mongoose = require("mongoose")

// Use an object to store date inside model so that more categories can be created in API
const schema = mongoose.Schema({
	date: Date,
	
},{ collection : 'Journals' })

module.exports = mongoose.model("JournalEntry", schema)
