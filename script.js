

function run() {
    console.log(JSON.stringify(robotCode));

    //alert('Robot doesn\'t want to go because robot desn\'t know how to go!\n Please help robot go...');
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