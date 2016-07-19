var commands = [];

function timerLoop() {
    "use strict";
    var i = 0;
    if (commands.length < 1) { return; }
    for (i = commands.length - 1; i >= 0; i = i - 1) {
        commands[i].elapsed = commands[i].elapsed + 1;
        if (commands[i].elapsed >= commands[i].deadline && !commands[i].finished) {
            commands[i].execute(commands[i].associatedData);
            commands.splice(i, 1);
        }
    }
}

function schedule(time, functionToExecute, associatedData) {
    "use strict";
    commands.push({
        elapsed: 0,
        deadline: time,
        associatedData: associatedData,
        execute: functionToExecute
    });
}

setInterval(timerLoop, 1000);