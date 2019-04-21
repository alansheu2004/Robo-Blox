var robotCode;

function clearInstructions() {
    robotCode = {"instructions":[]};
}

function generateCode() {
    var code = Blockly.JavaScript.workspaceToCode(workspace);
    var split = code.split("\n\n");
    var final;

    for (let string of split) {
        if(string.startsWith("onRobotStart:")) {
            final = string.split('\n').slice(1).join('\n');
            break;
        }
    }

    clearInstructions();
    eval(final);
    
}

function wait(time) {
    robotCode.instructions.push({"type":"wait", "time":time});
}

function turn(direction) {
    robotCode.instructions.push({"type":"turn", "direction":direction});
}

function drive(mode, distance) {
    robotCode.instructions.push({"type":"drive", "mode":mode, "distance":distance});
}