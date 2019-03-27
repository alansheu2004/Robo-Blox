Blockly.Blocks['robot_drive_distance'] = {
  init: function() {
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(20);

	this.appendDummyInput()
		.appendField('move robot')
		.appendField(new Blockly.FieldDropdown([['forward', 'FORWARD'], ['backward', 'BACKWARD']]), 'MODE')
		.appendField('by')
		.appendField(new Blockly.FieldTextInput('2'), 'DISTANCE')
		.appendField('feet');
  }
};

Blockly.Blocks['robot_turn_degrees'] = {
  init: function() {
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(20);

		this.appendDummyInput()
			.appendField('turn robot')
			.appendField(new Blockly.FieldDropdown([['left', 'LEFT'], ['right', 'RIGHT']]), 'MODE')
			.appendField('by')
			.appendField(new Blockly.FieldAngle(90), 'ANGLE');
	}
	
};

Blockly.Blocks['robot_wait'] = {
  init: function() {
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(20);

		this.appendDummyInput()
			.appendField('wait for')
			.appendField(new Blockly.FieldTextInput('2'), 'TIME')
			.appendField('seconds');
	}
	
};

Blockly.Blocks['robot_on_start'] = {
  init: function() {
    this.setNextStatement(true);
		this.setColour('#E4D00A');
		this.appendDummyInput()
			.appendField('On robot start');
	}
	
};