Blockly.JavaScript['robot_drive'] = function(block) {
    var code  = {direction: block.getFieldValue("DIRECTION"), distance: block.getFieldValue("DISTANCE")};
    return "\"drive\": " + JSON.stringify(code) + ",\n";
}

Blockly.JavaScript['robot_turn'] = function(block) {
    var code  = {direction: block.getFieldValue("DIRECTION")};
    return "\"turn\": " + JSON.stringify(code) + ",\n";
}

Blockly.JavaScript['robot_wait'] = function(block) {
    var code  = {time: block.getFieldValue("TIME")};
    return "\"wait\": " + JSON.stringify(code) + ",\n";
}

Blockly.JavaScript['robot_on_start'] = function(block) {
    return "{";
}

Blockly.JavaScript['controls_repeat'] = function(block) {
    code = "";
    for(var i = 0; i < block.getFieldValue('TIMES'); i++) {
        code+= Blockly.JavaScript.statementToCode(block, 'DO');
    }
    return code;
}