var blocklyArea = document.getElementById('blocklyArea');
var blocklyDiv = document.getElementById('blocklyDiv');

Blockly.BlockSvg.START_HAT = true;

var workspace = Blockly.inject(blocklyDiv, { toolbox: document.getElementById('toolbox'),
	grid: {spacing: 20,
		length: 3,
		colour: '#ccc',
		snap: true},
	scrollbars: false});
var onresize = function(e) {
	var element = blocklyArea;
	var x = 0;
	var y = 0;
	do {
		x += element.offsetLeft;
		y += element.offsetTop;
		element = element.offsetParent;
	} while (element);

	blocklyDiv.style.left = x + 'px'; 
	blocklyDiv.style.top = y + 'px'; 
	blocklyDiv.style.width = blocklyArea.offsetWidth + 'px';
	blocklyDiv.style.height = blocklyArea.offsetHeight + 'px';
	Blockly.svgResize(workspace);
};

var defaultBlocks = document.getElementById('blocklyDefault');
var startBlock;
function addStartBlock() {
	startBlock = workspace.getBlockById(Blockly.Xml.domToWorkspace(defaultBlocks, workspace)[0]);
	startBlock.setDeletable(false);
	startBlock.moveBy(120, 20);
	startBlock.setMovable(false);
}
addStartBlock();

window.addEventListener('resize', onresize, false);
onresize();
Blockly.svgResize(workspace);