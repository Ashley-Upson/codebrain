function displayEntry(index) {
    "use strict";
    addActivity(ipTable[index], "console");
}

// var clientID = Math.random(18).substring(0, 15);

function playerScan(){
	"use strict";
	var ip1 = randomBetween(1, 255),
		ip2 = randomBetween(1, 255),
		ip3 = randomBetween(1, 255),
		ip4 = randomBetween(1, 255),
		ipAddress = ip1.toString() + "." + ip2.toString() + "." + ip3.toString() + "." + ip4.toString();
	ipTable[ipTable.length] = ipAddress;
	addActivity("Found an IP address: " + ipAddress, "console");
	addActivity("Program returned: <i>null</i>", "console");
}


function scanList() {
    "use strict";
    var i = 0;
    addActivity("Listing IP addresses.", "console");
    for (i = 0; i < ipTable.length; i = i + 1) {
        schedule(i + 1, displayEntry, i);
    }
}

function firewall() {
    "use strict";
    addActivity("Player Firewall.", "console");
}

function antivirus() {
    "use strict";
    addActivity("Player Anti-virus.", "console");
}

function decrypt() {
    "use strict";
    addActivity("Player Decryption Algorithm.", "console");
}

function bot() {
    "use strict";
    addActivity("Player Bot Program.", "console");
}

function botnet() {
    "use strict";
    addActivity("Player Botnet efficiency.", "console");
}

function attack_botnet() {
	"use strict";
    addActivity("Botnet attack Program.", "console");
}

function control() {
    "use strict";
    addActivity("Player Control Server.", "console");
}

function trojan() {
    "use strict";
    addActivity("Firewall Attack Program.", "console");
}

function malware() {
    "use strict";
	
    addActivity("Anti-virus Attack Program.", "console");
}

function hack() {
    "use strict";
    addActivity("Wiring enemy BrainCoins to Player Account.", "console");
}