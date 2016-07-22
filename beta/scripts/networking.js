/*

	--------
	OLD CODE
	--------

var webSocket,
    ipAddress = "ws://localhost:8080/",
    connected = false;

function connect() {//A function which will allow the player to connect to a server.
    "use strict";
    webSocket = new WebSocket (ipAddress);//Create a new web socket to connect to a WebSocket server.
    webSocket.onopen = connectedToServer;//Set a function to handle when the client has connected to the server.
    webSocket.onmessage = recieveMessageFromServer;//Set a function to handle when the client has recieved data from the server.
    webSocket.onclose = serverClosed;//Set a function to handle when the client is disconnected from the WebSocket server.
}

function serverClosed() {
    connected = false;//Set the variable connected to false so the client knows it isn't connected to a WebSocket server.
}

function recieveMessageFromServer(event) {//A function designed to handle data retrieved from the server.
    "use strict";
    var recievedObjectData = JSON.parse(event.data),//Parse the JSON data sent from the server.
        i = 0;//A variable to hold the current index in the array.
    players = [];//Reset the list of players.
    for (i = 0 ; i < recievedObjectData.length; i = i + 1) {//Go through the list of object data recieved.
        if (recievedObjectData[i].objectType == "player") {//If the current item in the list is a player.
            if (recievedObjectData[i].objectID !== currentPlayer.objectID) {//If it isn't the current player.
                players.push(recievedObjectData[i]);//Push the data to the list of players..
            }
        }
    }
    players.push(currentPlayer);
}

function connectedToServer() {//A function to handle when the client connects to the server.
    "use strict";
    connected = true;//Set a variable to indicate that the client has successfully connected to the WebSockets server.
}

function updatePlayerInformation() {//A function to update the player information.
    if (connected) { webSocket.send(JSON.stringify(currentPlayer)); }
}

*/
function webSocket() {
	"use strict";
	var ip = "192.168.1.12",
		port = 8080;
	if ("WebSocket" in window) {
		var ws = new WebSocket("ws://localhost" + ":" + port + "/");// Open a new WebSocket
		ws.onopen = function () {
			// Web Socket is connected, send data using send()
			ws.send("fromClient");
		};
		ws.onmessage = function (event) {
			var receivedMessage = event.data;
			document.getElementById("serverStatus").innerHTML=receivedMessage;
		};
		ws.onclose = function () {
			// websocket is closed
		};
	} else {
		// The browser doesn't support WebSocket
	}
}