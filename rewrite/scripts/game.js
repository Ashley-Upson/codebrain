/**
 *	Create the initial IP table array.
 *	Check whether or not the client has a profile on the server.
 *	Request the IP's available from the server for the player.
 *
 *	Define all variables to be used in the script, along with what they're used for and where.
 */
// GLOBAL VARIABLES.
var ipTable = [];			// Holds all IP addresses available to the user.
var clientID = Math.random().toString(36);			// Generate an ID for the current client
var activityLogHolder = document.getElementById("activityLog");		// Variable holding the activity log element.
// FUNCTIONS
function addActivity(toWrite, type) {		// Write text to the player console.
	"use strict";		// Check the code against established coding standards.
	if(type === "user"){		//Check the type of data recieved.
		
	}
}