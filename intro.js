var items = document.getElementsByTagName("li");

var addListElement = function(e) {
    var thelist = document.getElementById("thelist");
    var newitem = document.createElement("li");
    var num = items.length;
	newitem.addEventListener("mouseover",hoverChangeHeading);
	newitem.addEventListener("mouseout",resetHeading);
	newitem.addEventListener("click",removeListElement);
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
};
for (var i = 0; i < items.length; i++) {
    items[i].addEventListener("mouseover",hoverChangeHeading);
}

var resetHeading = function(e) {
    document.getElementById("h").innerHTML = defHeading;
};
for (var i = 0; i < items.length; i++) {
    items[i].addEventListener("mouseout",resetHeading);
}



var fibn = function(len) {
    var a = 1;
    var b = 1;
    while (len > 1){
	var newFib = a + b;   
	a = b;
	b = newFib;
	len--;
    }
    return b;
};

var fibnR = function(len) {
    if (len < 2){
	return 1;
    }
    return fibnR(len-1)+ fibnR(len-2);
};

var fibfxn = function(e) {
    var thelist = document.getElementById("fib");
    var newitem = document.createElement("li");
    var num = fibnR(thelist.childNodes.length)
    newitem.innerHTML = num;    
    thelist.appendChild(newitem);    
    
};

document.getElementById("fbutton").addEventListener("click",fibfxn);


var piList = document.getElementById("pi");

var nPi = function(n) {
	var aimAtOne = Math.floor(Math.PI * Math.pow(10,n));
	while (aimAtOne >= 10) {
		aimAtOne = aimAtOne % 10;
	}
	return aimAtOne;
}

var piAdd = function(e) {
	var len = piList.childNodes.length;
    var newitem = document.createElement("li");
	num = nPi(len);
    newitem.innerHTML = num;    
    piList.appendChild(newitem);    
}

document.getElementById("pibutton").addEventListener("click",piAdd);