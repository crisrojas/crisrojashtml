document.onkeydown = function(evt) {
evt = evt || window.event;
if (evt.keyCode == '37') {
	window.history.back();
}
if (evt.keyCode == '39') {
	window.history.forward();
}
if (evt.keyCode == '38') {
	window.location.href = "../../"
}
};