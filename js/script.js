// start up function to be called when the page loads
// startup will establish event handlers
function startup() { //windowload
    var btn = document.getElementById("mybtn");
    var startpos = 0;
    var distance = 0;
    //start of touch
    btn.addEventListener("touchstart", function(start) {
        var touchArea = start.changedTouches[0]; // takes first point of touch
        
        startpos = parseInt(touchArea.clientX); // takes value (positon of touch relative to the left most side of the browser) and parses to an int value.

        console.log("position: " + startpos + "px");
        
        alert(this.id + "congrats u tocuhed it");

        start.preventDefault(); // prevent default associated act from occuring

        

    }, false);

    // end of touch
    btn.addEventListener("touchend", function(end) {
        var touchArea = end.changedTouches[0];
        end.preventDefault();
    }, false);

    // cancelled touch
    btn.addEventListener("touchcancel", function(cancel) {
        var touchArea;

    }, false);

    // movement
    btn.addEventListener("touchmove", function(move) {
        var touchArea = move.changedTouches[0];
        distance = parseInt(touchArea.clientX) - startpos;
    }, false);

}

document.addEventListener("DOMContentLoaded", startup) // fires when base html page loads and parses without waiting for anything else 

var newwindow;
function poptastic(url)
{
	newwindow=window.open(url,'name','height=400,width=200');
	if (window.focus) {newwindow.focus()}
}