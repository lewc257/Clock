var currentLocation = window.location.href.split("/");

var len = currentLocation.length;

var navBarButtons = document.getElementById("nav-bar");

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