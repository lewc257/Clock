function formatMilliseconds(milli) {
	var seconds = parseInt(milli / 1000);
	var minutes = parseInt(seconds / 60);
	var hours = parseInt(minutes / 60);
	var hrs = formatNumber(hours % 24);
	var mins = formatNumber(minutes % 60);
	var secs = formatNumber(seconds % 60);
	return `${hrs}:${mins}:${secs}`;
}

function formatDate(date) {
	var day = formatNumber(date.getDate());
	var month = formatNumber(date.getMonth() + 1);
	var year = formatNumber(date.getFullYear());
	var hour = formatNumber(date.getHours());
	var minute = formatNumber(date.getMinutes());
	return `${day}/${month}/${year}  ${hour}:${minute}`;
}


function getTime(date){
	var hour = formatNumber(date.getHours());
	var minute = formatNumber(date.getMinutes());
	var second = formatNumber(date.getSeconds());
	return `${hour}:${minute}:${second}`;
}

function formatNumber(number){
	return number < 10 ? "0" + number : number;
}