function startCountdown(hours, minutes, seconds) {
	let total = hours * 3600 + minutes * 60 + seconds;

	const update = () => {
		const hrs = Math.floor(total / 3600);
		const mins = Math.floor((total % 3600) / 60);
		const secs = total % 60;

		document.getElementById("hours").textContent = String(hrs).padStart(
			2,
			"0"
		);
		document.getElementById("minutes").textContent = String(mins).padStart(
			2,
			"0"
		);
		document.getElementById("seconds").textContent = String(secs).padStart(
			2,
			"0"
		);

		if (total > 0) {
			total--;
			setTimeout(update, 1000);
		}
	};

	update();
}

// Start 3-hour countdown
startCountdown(3, 0, 0);
