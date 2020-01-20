var running = false;

function run() {
    running = true;
    document.getElementById("glassPane").style.display = "initial";
    document.getElementById("glassPane").className = "fadeIn";
}

function cancel() {
    running = false;
    document.getElementById("glassPane").className = "fadeOut";
    document.getElementById("glassPane").style.filter = "opacity(0%)";
    setTimeout(function() {document.getElementById("glassPane").style.display = "none";document.getElementById("glassPane").style.filter = "opacity(100%)";}, 750);
}

function reset() {
    if(confirm('Are you sure you want to reset? This will delete all your code!')){
        Blockly.mainWorkspace.clear();
        addStartBlock();
    }
}

function sliderSwitch(element) {
    if(element.checked) {
        element.parentElement.previousElementSibling.style.color = 'white';
        element.parentElement.nextElementSibling.style.color = '#ff8c3c';
    } else {
        element.parentElement.previousElementSibling.style.color = '#ff8c3c';
        element.parentElement.nextElementSibling.style.color = 'white';
    }
}

function update(event) {
  var code = Blockly.JavaScript.workspaceToCode(workspace);
  console.log(code);
}