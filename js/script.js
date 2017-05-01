function hideImage(){
	var welcome = document.getElementById("welcome");
	welcome.style.display = "none";
	news = document.getElementById("news");
	news.style.display = "block";
}


function move(ms) {
    var elem = document.getElementById("bar");
    var width = 1;
    var id = setInterval(frame, ms);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
            elem.style.display = "block";
        } else {
            width += 2; 
            elem.style.width = width + '%'; 
        }
    }
}


function clicked(section) {
	var sections = document.getElementsByTagName("section");
	var j;
	for (j = 0; j < sections.length; j++) {
		sections[j].style.display = "none";
	}
	var s = document.getElementById(section);
	s.style.display = "block";

	move(10);
}

function expand(what) {
	var elem = document.getElementById(what);

	if (elem.style.display == "") {
		elem.style.display = "none";
	}

	if (elem.style.display == "none") {
		elem.style.display = "block";
	} else if (elem.style.display == "block") {
		elem.style.display = "none";
	}

	localStorage.setItem(what, elem.style.display);
}

function loadExpanded(what){
	var elem = document.getElementById(what);
	var value = localStorage.getItem(what);
	if (value == null) {
		value = "none"
	}
	elem.style.display = value;
}

