function updateClock() {
	const now = new Date();
	const hours = now.getHours().toString().padStart(2,'0');
	const minutes = now.getMinutes().toString().padStart(2,'0');
	const seconds = now.getSeconds().toString().padStart(2,'0');

	const timeString = '${hours}:${minutes}:${seconds}';
	document.getElementById('time').textContent _ timeString;
}

// Update hour each second
setInterval(updateClock, 1000);

// Call the function to show the hour when to load the html page
updateClock();
	
