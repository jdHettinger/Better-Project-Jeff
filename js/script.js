
//function to detect touches and match to targets buttons
//prototype in progress
function startUp() {
    var btnErin = document.getElementById("btnErin");
    var clickErin = document.getElementById("btnErin");
    btnErin.addEventListener("touchstart", function pop_One(start){
        var touch = start.changedTouches[0];
        var newwindow;
        if (touch == btnErin){
            newwindow=window.open('https://www.google.com/maps','name','height=400,width=600');
            if (window.focus) {newwindow.focus()}
            alert(this.id + "tocuh");
        }
    }, false);

}

//base working function - rudimentary
var newwindow;
function pop_new_window(url)
{
	newwindow=window.open(url,'name','height=400,width=600');
    if (window.focus) {newwindow.focus()} //request to bring popup to front / over main page
    setTimeout(function(){ 
        newwindow.close() 
    }, 30000); //timer to close window 
}

