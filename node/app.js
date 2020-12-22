const express = require("express")
const mongoose = require("mongoose")
const api_routes = require("./routes/api_routes")
const primary_routes = require("./routes/primary_routes")
const calendar_routes = require("./routes/calendar_routes")
const core = require("./core")

mongoose // MongoDB database connection which contains REST API
	.connect("mongodb://localhost:27017/PrimaryData", { useNewUrlParser: true })
	.then(() => {

		const app = express()

    // Set ejs view-engine
    app.set('views', './views')
    app.set('view engine', 'ejs')

    // Implement routes
    app.use("/api", api_routes)
		app.use("/calendar", calendar_routes)
		app.use("/", primary_routes)

		app.listen(3000, () => {
      console.log("Succesful connection to port 3000")
      core.run(); // Begin server loop.
		})
	})
//====================================================
//                  TO-DO
// =====================================================
/*

=== *%* ===  GENERAL  === *%* ===
			-- Finish CSS

			-- Security system (pswd)

			-- Startup/linklist page

=== *%* ===  CALENDAR  === *%* ===
			-- db_utils.js holds functions for calendar, thats dumb

			-- create reacurring events, all day (timeless) events, preselected colors

			-- Redo calendar CSS

			-- Create manditory input systems for title and begin date.

			-- Alert System

=== *%* ===  JOURNAL  === *%* ===
			-- Create a journal sorting function

			-- CSS is hardcoded into EJS, thats bad

			-- Add system to modify and delete old journals.

			-- Library system, multiple different collections of Journals

			-- Add a way to store images.

=== *%* ===  DATA LOG  === *%* ===









*/
