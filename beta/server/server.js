var express = require('express'),// Require the "express" module
	app = express(),// Create the handle for the "express" module
	expressWs = require('express-ws')(app),// Require the "express-ws" module
	dataToSend,// Variable to hold the data that is to be sent to the client
	clientToRecieve,// Variable to hold the client ID for the response
	jobList = [][2][1];// Array to hold all the connected clients { connectedClients[job],[clientId],[timeLeft] }
/**
 *	INSERT CODE FOR ALL GAME FUNCTIONS HERE
 */
function randomBetween(min, max) {// Function to generate a random number between min and max inclusive
	"use strict";// Check the code against established coding standards
	return (Math.floor(Math.random() * max) + 1);// Generate and return the random number
}
function gameCommands(command) {// Function to deal with commands sent by the client - called by parseWebSocketData
	"use strict";// Check the code against established coding standards
	if (command === "scan") {// If the command recieved is "scan"
		pcScan();// Call the function relevant to the client command
	} else if (command === "") {// If the command recieved is ""
		//Call the fucntion relevant to the client command 
	}
}
// All the fucnctions that are to be used by the player.
function pcScan(client) {// Server logic for the player input of "scan();".
	"use strict";// Check the code against established coding standards
	var ip1 = randomBetween(1, 255),// Generate the first section of the IP address into a string
		ip2 = randomBetween(1, 255),// Generate the second section of the IP address into a string
		ip3 = randomBetween(1, 255),// Generate the third section of the IP address into a string
		ip4 = randomBetween(1, 255),// Generate the fourth section of the IP address into a string
		ipAddress = ip1 + "." + ip2 + "." + ip3 + "." + ip4;// Create the whole generated IP address into a string
	dataToSend = "pcScan;" + ipAddress;// Set the data to be sent to the client
	clientToRecieve = client;// Set the client to recieve the data
}
function pcList() {// Server logic for the player input of "list();".
	"use strict";// Check the code against established coding standards
}
function pcFirewall() {// Server logic for the player input of "firewall();".
	"use strict";// Check the code against established coding standards
}
function pcAV() {// Server logic for the player input of "antivirus();".
	"use strict";// Check the code against established coding standards
}
function pcDecrypt() {// Server logic for the player input of "decrypt();".
	"use strict";// Check the code against established coding standards
}
function pcBot() {// Server logic for the player input of "bot();".
	"use strict";// Check the code against established coding standards
}
function pcBotnet() {// Server logic for the player input of "botnet();".
	"use strict";// Check the code against established coding standards
}
function pcAttackBotnet() {// Server logic for the player input of "attack_botnet();".
	"use strict";// Check the code against established coding standards
}
function pcControl() {// Server logic for the player input of "control();".
	"use strict";// Check the code against established coding standards
}
function pcTrojan() {// Server logic for the player input of "trojan();".
	"use strict";// Check the code against established coding standards
}
function pcMalware() {// Server logic for the player input of "malware();".
	"use strict";// Check the code against established coding standards
}
function pcHack() {// Server logic for the player input of "hack();".
	"use strict";// Check the code against established coding standards
}
function parseWebSocketData(receivedData, client) {// Deals with ALL data recieved from the client.
	/**
	 *	Data structure of all data sent to the server:
	 *	{"primaryType;secondaryType;optionalData"}
	 *		primaryType:
	 *			command
	 *			serverData
	 *		secondaryType:
	 *			if primaryType === command
	 *				addActivity;
	 *				pcScan;
	 *				pcList;
	 *				pcFirewall;
	 *				pcAV;
	 *				pcDecrypt;
	 *				pcBot;
	 *				pcBotnet;
	 *				pcAttackBotnet;
	 *				pcControl;
	 *				pcTrojan;
	 *				pcMalware;
	 *				pcHack;
	 */
	"use strict";// Check the code against established coding standards
	console.log(receivedData + " From client: " + client);// Output to the console the daya recieved and from which client
	var data = receivedData.substring(receivedData.indexOf("-") + 1),// Take the data sent by the client without the client ID
		firstSemiColon = data.indexOf(";"),// Variable holding the index of the first separation character
		primaryType = data.substring(0, firstSemiColon),// Variable holding the "primaryType" of the data sent by the client
		currentData = data.substring(firstSemiColon + 1, receivedData.length),// Variable holding the current data being worked with
		nextSemiColon = currentData.indexOf(";") || receivedData.length - 1,// Variable holding the index of the next separation characted
		secondaryType = currentData;// Variable holding the "secondaryType" of the data sent by the client
	if (primaryType === "command"){// Check what the "primaryType" of the data sent by the client is
		if(secondaryType === "pcScan"){// Execute the following code if primaryType is "pcScan"
			pcScan(client);// Call pcScan (player command scan)
		}
	}
}
/*  ---------------------------------------  */
app.use(function (request, response, next) {// TBD
	request.testing = 'server';// TBD
	return next();// TBD
});
app.get('/', function(request, response, next){// TBD
	console.log('get route', request.testing);// TBD
	response.end();// TBD
});
/**
 *	This function deals with data sent by the client.
 */
app.ws('/', function(ws, req) {
    var clientSocket = req.socket;// TBD
	ws.on('message', function(msg) {
		var clientFromMsg = msg.substring(0, msg.indexOf("-"));// Variable containing the client ID, sent by the client
		message = msg.substring(msg.indexOf("-") + 1);// Take the data sent after the clientID and store it here
		parseWebSocketData(message, clientFromMsg);// This function deals with all information recieved via websockets.
	});
});
var aWss = expressWs.getWss('/');
setInterval(function () {
	aWss.clients.forEach(function (client) {
		var clientSocket = client._sender._socket;
		if(dataToSend === null) {
			// Do nothing
		} else {
			// console.log(client._sender._socket);
			if(clientSocket === clientToRecieve){
				client.send(dataToSend);
				dataToSend = null;
			}
		}
	});
	console.log(connectedClients);// Output the clients to the console
}, 1000);// Run the block of code every 1000 milliseconds
app.listen(8080);
console.log("Executed all code.");