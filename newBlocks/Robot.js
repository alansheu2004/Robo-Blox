Blockly.Blocks['robot_drive_timed'] = {
  init: function() {
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(300);

	this.appendValueInput('TIME')
		.appendField('move robot')
		.appendField(new Blockly.FieldDropdown([['forward', 'FORWARD'], ['backward', 'BACKWARD']]), 'MODE')
		.appendField('for');
	this.appendDummyInput()
		.appendField('seconds');
  }
};

Blockly.Blocks['robot_drive_distance'] = {
  init: function() {
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(300);

	this.appendValueInput('DISTANCE')
		.appendField('move robot')
		.appendField(new Blockly.FieldDropdown([['forward', 'FORWARD'], ['backward', 'BACKWARD']]), 'MODE')
	this.appendDummyInput()
		.appendField('feet');
  }
};

Blockly.Blocks['robot_turn_timed'] = {
  init: function() {
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(300);

	this.appendValueInput('TIME')
		.appendField('turn robot')
		.appendField(new Blockly.FieldDropdown([['left', 'LEFT'], ['right', 'RIGHT']]), 'MODE')
		.appendField('for');
	this.appendDummyInput()
		.appendField('seconds');
  }
};

Blockly.Blocks['robot_turn_degrees'] = {
  init: function() {
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(300);

	this.appendDummyInput()
		.appendField('turn robot')
		.appendField(new Blockly.FieldDropdown([['left', 'LEFT'], ['right', 'RIGHT']]), 'MODE')
		.appendField(new Blockly.FieldAngle(90), 'DEGREES');
  }
};