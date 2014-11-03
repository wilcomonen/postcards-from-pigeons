var showReady = function() {
    // get the element that says Connecting to Device,
    // hide it,
    // get the element that says Device is Ready,
    // show it
    
    var listeningElement = document.querySelector('.listening');
    var receivedElement  = document.querySelector('.received');
    
    listeningElement.setAttribute('style', 'display:none;');
    receivedElement.setAttribute('style', 'display:block;');
}

var initialize = function() {
    // When the event `deviceready` is triggered,
    // (when the Cordova functions have iniated)
    // run the function `showReady`
    document.addEventListener('deviceready', showReady, false);
}

$("#buy-pigeon").click(function() {
	console.log("clicked on buy pigeon");
	$(".view#start-view").removeClass("active");
	$(".view#my-pigeon-view").addClass("active");
});
