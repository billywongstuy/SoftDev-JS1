var items = document.getElementsByTagName("li");

var addListElement = function(e) {
	//Hint: You should do this last
}
document.getElementById("b").addEventListener("click",addListElement);


var removeListElement = function(e) {

}





var defHeading = document.getElementById("h").innerHTML;

var hoverChangeHeading = function(e) {
	document.getElementById("h").innerHTML = this.innerHTML;
}
for (var i = 0; i < items.length; i++) {
	items[i].addEventListener("mouseover",hoverChangeHeading);
}

var resetHeading = function(e) {
	document.getElementById("h").innerHTML = defHeading;
}
for (var i = 0; i < items.length; i++) {
	items[i].addEventListener("mouseout",resetHeading);
}
