function displayEntry(index) {
    "use strict";
    addActivity(ipTable[index], "console");
}

function scanList() {
    "use strict";
    var i = 0;
    document.getElementById("status").innerHTML = "Command Executed.";
    addActivity("Listing IP addresses.", "console");
    for (i = 0; i < ipTable.length; i = i + 1) {
        schedule(i + 1, displayEntry, i);
    }
}

function firewall() {
    "use strict";
    document.getElementById("status").innerHTML = "Command Executed.";
    addActivity("Player Firewall.", "console");
}

function antivirus() {
    "use strict";
    document.getElementById("status").innerHTML = "Command Executed.";
    addActivity("Player Anti-virus.", "console");
}

function decrypt() {
    "use strict";
    document.getElementById("status").innerHTML = "Command Executed.";
    addActivity("Player Decryption Algorithm.", "console");
}

function bot() {
    "use strict";
    document.getElementById("status").innerHTML = "Command Executed.";
    addActivity("Player Bot Program.", "console");
}

function botnet() {
    "use strict";
    document.getElementById("status").innerHTML = "Command Executed.";
    addActivity("Player Botnet efficiency.", "console");
}

function attack_botnet() {
    document.getElementById("status").innerHTML = "Command Executed.";
    addActivity("Botnet attack Program.", "console");
}

function control() {
    "use strict";
    document.getElementById("status").innerHTML = "Command Executed.";
    addActivity("Player Control Server.", "console");
}

function trojan() {
    "use strict";
    document.getElementById("status").innerHTML = "Command Executed.";
    addActivity("Firewall Attack Program.", "console");
}

function malware() {
    "use strict";
    document.getElementById("status").innerHTML = "Command Executed.";
    addActivity("Anti-virus Attack Program.", "console");
}

function hack() {
    "use strict";
    document.getElementById("status").innerHTML = "Command Executed.";
    addActivity("Wiring enemy BrainCoins to Player Account.", "console");
}