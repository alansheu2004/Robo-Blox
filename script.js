var pubnub = new PubNub({
    subscribeKey: "sub-c-59622a74-63fc-11e9-82b5-0e0cd4972a93",
    publishKey: "pub-c-fdafd84e-34cc-419c-9c1a-1257e0426f98",
    ssl: true
});

pubnub.addListener({
    message: function(message) {
        console.log(message)
    }
})

pubnub.subscribe({
    channels: ['my_channel']
});

function run() {
    console.log(JSON.stringify(robotCode));

    pubnub.publish(
        {
            message: robotCode,
            channel: 'my_channel',
            sendByPost: false, // true to send via post
            storeInHistory: false, //override default storage options
            meta: {}
        }, 
        function (status, response) {
            if (status.error) {
                // handle error
                console.log(status)
            } else {
                console.log("message Published w/ timetoken", response.timetoken)
            }
        }
    );

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