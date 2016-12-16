var items = document.getElementsByTagName("li");

var addListElement = function(e) {
    var thelist = document.getElementById("thelist");
    var newitem = document.createElement("li");
    var num = items.length;
    newitem.innerHTML = "item " + num;
    thelist.appendChild(newitem);
    
};

document.getElementById("b").addEventListener("click",addListElement);


var removeListElement = function(e) {
    this.outerHTML = "";
    delete this;
};

for (var i = 0; i < items.length; i++) {
    items[i].addEventListener("click",removeListElement);
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
