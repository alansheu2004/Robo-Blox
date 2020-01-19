Blockly.JavaScript['robot_drive'] = function(block) {
    // Search the text for a substring.
    var mode = block.getFieldValue('MODE') == "FORWARD" ? "forward" : "backward" ;
    var distance = block.getFieldValue('DISTANCE')
    var code = "drive(\'" + mode + "\', " + distance + ");\n"
    return code;
};

Blockly.JavaScript['robot_turn'] = function(block) {
    // Search the text for a substring.
    var mode = block.getFieldValue('MODE') == "LEFT" ? "left" : "right" ;
    var code = "turn(\'" + mode + "\');\n"
    return code;
};

Blockly.JavaScript['robot_wait'] = function(block) {
    // Search the text for a substring.
    var mode = block.getFieldValue('TIME');
    var code = "wait(" + mode + ");\n"
    return code;
};

Blockly.JavaScript['robot_on_start'] = function(block) {
    var code = 'onRobotStart:\n';
    return code;
};