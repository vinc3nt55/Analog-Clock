setInterval(() => {
	const date = new Date();
	updateTime(date);
	updateClock(date);
	backgroundColor(date);
}, 1000);
// Analog Clock
function updateClock(date) {
	const hrHand = document.querySelector('#hr-hand').style;
	const minHand = document.querySelector('#min-hand').style;
	const secHand = document.querySelector('#sec-hand').style;
	secHand.transform = `rotate( ${date.getSeconds() * 6}deg)`;
	minHand.transform = `rotate( ${date.getMinutes() * 6}deg)`;
	hrHand.transform = `rotate(${date.getHours() * 30 + date.getMinutes() * 0.5}deg)`;
}
// Digital Clock
function updateTime(date) {
	const timeDiv = document.querySelector('.time');
	const time = `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`;
	timeDiv.innerHTML = time;
}
// Change color
function backgroundColor(date) {
	const body = document.body.style;
	const seconds = date.getSeconds();
	let secondsDegree = ((seconds / 60) * 360);
	let hour = ((seconds / 60) * 360) + 90;
	// Change Color
	if(secondsDegree > 255) {
		secondsDegree = seconds;
	}else if(hour > 255) {
		hour = ((seconds / 100) * 360);
	}
	// In Minutes
	const minutes = date.getMinutes();
	const minutesDegree = ((minutes / 60) * 360);
	body.backgroundColor = `rgba(${secondsDegree}, ${minutesDegree}, ${hour})`;
}