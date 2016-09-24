/**
 *	Create the initial IP table array.
 *	Check whether or not the client has a profile on the server.
 *	Request the IP's available from the server for the player.
 *
 *	Define all variables to be used in the script, along with what they're used for and where.
 */
// GLOBAL VARIABLES.
var ipTable = [];		// Holds all IP addresses available to the user.
var clientID = Math.random().toString(36);		// Generate an ID for the current client
var activityLogHolder = document.getElementById("activityLog");		// Variable holding the activity log element.
var temp = "";		// variable to hold any data that will not be needed again.
// FUNCTIONS
function addActivity(toWrite, type) {		// Write text to the player console.
	"use strict";		// Check the code against established coding standards.
	if (type === "user") {		//Check the type of data recieved.
		temp = "";		// Ensure the temp variable is cleared.
		temp = activityLogHolder.innerHTML;		// Store the contents of the activityLog element into the temp variable.
		temp = temp + "<br>";		// Set a new line for the activityLog.		
		activityLogHolder.innerHTML = temp + "$user >>> " + toWrite;		// Write 'toWrite' to the player console.
		activityLogHolder.scrollTop = activityLogHolder.scrollHeight;		// Make the  player console scroll to the end automatically.
	} else if (type === "console") {		// Check the type of data recieved.
		temp = "";		// Ensure the temp variable is cleared.
		temp = activityLogHolder.innerHTML;		// Store the contents of the activityLog element into the temp variable.
		temp = temp + "<br>";		// Set a new line for the activityLog.
		activityLogHolder.innerHTML = temp + "$_ >>> " + toWrite;		// Write 'toWrite' to the player console.
	} else {
		temp = "";		// Ensure the temp variable is cleared.
		temp = activityLogHolder.innerHTML;		// Store the contents of the activityLog element into tge temp variable.
		temp = temp + "<br>";		// Set a new line to the activityLog.
		temp = temp + "ERROR ENCOUNTERED. CONTACT GAME ADMINISTRATOR";		// This should never happen.
	}
	return true;		// Always make sure this reports back as complete.
}

function inputByUser(userCommand) {		// Function to process the input recieved from the user.
	"use strict";		// Compare code against the established coding standards.
	sendToServer(userCommand);		// Send the 'userCommand' data to the server. Located in the networking.js file.
}

function keyDown(event) {		// Function to listen for the 'Enter' key being pressed down.
	"use strict";		// Compare the code against established coding standards.
	var command = document.getElementById("userCommandInput");		// Assign the element with ID 'userCommandInput' to the variable command.
	if (event.key === "Enter") {
		addActivity(command.value, "user");		// Add the user input to the player terminal.
		inputByUser(command.value);		// Allow the function inputByUser to process the user input.
		command.value = null;		// Set the value of the command element to nothing.
		return;		// Ensure the event ends here.
	}
}

function load() {		// Function to ensure the whole page is loaded before allowing the game to be played.
	"use strict";		// Check the code against established coding standards.
	var textEntry = document.getElementById("userCommandInput");		// Assign the element with ID 'userCommandInput' to the variable textEntry.
	textEntry.addEventListener('keyDown', keyDown);		// An event listener that listens for a 'keyDown' event and executes the function 'keyDown' when it detects it. It is assigned to the textEntry element.
}