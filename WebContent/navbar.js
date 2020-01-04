var currentLocation = window.location.href.split("/");

var len = currentLocation.length;

var navBarButtons = document.getElementsByClassName("nav-bar")[0];

var page = currentLocation[len - 1];

switch (page){
	case "countdown.html":
		navBarButtons.children[1].style.backgroundColor = 'yellow';
		break;
	case "local_clock.html":
		navBarButtons.children[0].style.backgroundColor = 'yellow';
		break;
	case "stopwatch.html": 
		navBarButtons.children[2].style.backgroundColor = 'yellow';
		break;
}

navBarButtons.children[1].onclick = function(e){
	if (page == "countdown.html"){
		e.preventDefault();
	}
}

navBarButtons.children[0].onclick = function(e){
	if (page == "local_clock.html"){
		e.preventDefault();
	}
}

navBarButtons.children[2].onclick = function(e){
	if (page == "stopwatch.html"){
		e.preventDefault();
	}
}