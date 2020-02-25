

function startUp() {
    var btnErin = document.getElementById("btnErin");
    var clickErin = document.getElementById("btnErin");
    btnErin.addEventListener("touchstart", function pop_One(start){
        var touch = start.changedTouches[0];

        if (touch == btnErin){
            newwindow=window.open('https://www.google.com/maps','name','height=400,width=600');
	        if (window.focus) {newwindow.focus()}
        }

        alert(this.id + "tocuh");
    }, false);

}

var newwindow;
function pop_new_window(url)
{
	newwindow=window.open(url,'name','height=400,width=600');
	if (window.focus) {newwindow.focus()}
}
