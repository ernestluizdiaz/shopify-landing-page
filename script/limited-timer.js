// Limited Countdown Timer Script
class LimitedCountdownTimer {
	constructor() {
		// Limited timer configuration
		this.limitedHours = 3;
		this.limitedMinutes = 59;
		this.limitedSeconds = 13;

		// Calculate limited end time (current time + limited duration)
		this.limitedEndTime =
			new Date().getTime() +
			this.limitedHours * 60 * 60 * 1000 +
			this.limitedMinutes * 60 * 1000 +
			this.limitedSeconds * 1000;

		// Limited DOM elements
		this.limitedHoursElement = document.getElementById("limited-hours");
		this.limitedMinutesElement = document.getElementById("limited-minutes");
		this.limitedSecondsElement = document.getElementById("limited-seconds");

		// Start limited timer
		this.startLimitedTimer();
	}

	startLimitedTimer() {
		const limitedInterval = setInterval(() => {
			const limitedCurrentTime = new Date().getTime();
			const limitedTimeRemaining =
				this.limitedEndTime - limitedCurrentTime;

			// Check if limited time has expired
			if (limitedTimeRemaining <= 0) {
				clearInterval(limitedInterval);
				this.handleLimitedTimerExpired();
				return;
			}

			// Calculate limited time units
			const limitedHours = Math.floor(
				limitedTimeRemaining / (1000 * 60 * 60)
			);
			const limitedMinutes = Math.floor(
				(limitedTimeRemaining % (1000 * 60 * 60)) / (1000 * 60)
			);
			const limitedSeconds = Math.floor(
				(limitedTimeRemaining % (1000 * 60)) / 1000
			);

			// Update limited display
			this.updateLimitedDisplay(
				limitedHours,
				limitedMinutes,
				limitedSeconds
			);
		}, 1000);
	}

	updateLimitedDisplay(limitedHours, limitedMinutes, limitedSeconds) {
		// Format limited time values with leading zeros
		const formattedLimitedHours = limitedHours.toString().padStart(2, "0");
		const formattedLimitedMinutes = limitedMinutes
			.toString()
			.padStart(2, "0");
		const formattedLimitedSeconds = limitedSeconds
			.toString()
			.padStart(2, "0");

		// Update limited DOM elements
		if (this.limitedHoursElement) {
			this.limitedHoursElement.textContent = formattedLimitedHours;
		}
		if (this.limitedMinutesElement) {
			this.limitedMinutesElement.textContent = formattedLimitedMinutes;
		}
		if (this.limitedSecondsElement) {
			this.limitedSecondsElement.textContent = formattedLimitedSeconds;
		}
	}

	handleLimitedTimerExpired() {
		// Limited timer expired actions
		console.log("Limited time sale has expired!");

		// Update limited display to show zeros
		this.updateLimitedDisplay(0, 0, 0);

		// Optional: Show limited time expired message
		this.showLimitedTimeExpiredMessage();
	}

	showLimitedTimeExpiredMessage() {
		const limitedTimerElement = document.querySelector(".countdown-timer");
		if (limitedTimerElement) {
			const limitedExpiredMessage = document.createElement("div");
			limitedExpiredMessage.className = "limited-expired-message";
			limitedExpiredMessage.innerHTML =
				"<strong>Limited Time Sale Has Ended!</strong>";
			limitedExpiredMessage.style.cssText = `
        color: #ff4444;
        font-size: 1.2em;
        font-weight: bold;
        text-align: center;
        margin-top: 10px;
        padding: 10px;
        background: rgba(255, 68, 68, 0.1);
        border-radius: 5px;
      `;
			limitedTimerElement.appendChild(limitedExpiredMessage);
		}
	}

	// Method to reset limited timer
	resetLimitedTimer(
		limitedHours = 3,
		limitedMinutes = 59,
		limitedSeconds = 13
	) {
		this.limitedHours = limitedHours;
		this.limitedMinutes = limitedMinutes;
		this.limitedSeconds = limitedSeconds;

		this.limitedEndTime =
			new Date().getTime() +
			this.limitedHours * 60 * 60 * 1000 +
			this.limitedMinutes * 60 * 1000 +
			this.limitedSeconds * 1000;

		// Remove limited expired message if exists
		const limitedExpiredMessage = document.querySelector(
			".limited-expired-message"
		);
		if (limitedExpiredMessage) {
			limitedExpiredMessage.remove();
		}

		this.startLimitedTimer();
	}

	// Method to get limited time remaining
	getLimitedTimeRemaining() {
		const limitedCurrentTime = new Date().getTime();
		const limitedTimeRemaining = this.limitedEndTime - limitedCurrentTime;

		if (limitedTimeRemaining <= 0) {
			return { limitedHours: 0, limitedMinutes: 0, limitedSeconds: 0 };
		}

		const limitedHours = Math.floor(
			limitedTimeRemaining / (1000 * 60 * 60)
		);
		const limitedMinutes = Math.floor(
			(limitedTimeRemaining % (1000 * 60 * 60)) / (1000 * 60)
		);
		const limitedSeconds = Math.floor(
			(limitedTimeRemaining % (1000 * 60)) / 1000
		);

		return { limitedHours, limitedMinutes, limitedSeconds };
	}
}

// Initialize limited countdown timer when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
	const limitedCountdownTimer = new LimitedCountdownTimer();

	// Make limited timer globally accessible for debugging
	window.limitedTimer = limitedCountdownTimer;
});

// Alternative simple function-based approach with limited variables
function initializeLimitedCountdownTimer() {
	// Limited timer variables
	let limitedTargetTime =
		new Date().getTime() + 3 * 60 * 60 * 1000 + 59 * 60 * 1000 + 13 * 1000;

	const limitedTimerInterval = setInterval(() => {
		const limitedNow = new Date().getTime();
		const limitedDistance = limitedTargetTime - limitedNow;

		if (limitedDistance < 0) {
			clearInterval(limitedTimerInterval);
			document.getElementById("hours").textContent = "00";
			document.getElementById("minutes").textContent = "00";
			document.getElementById("seconds").textContent = "00";
			console.log("Limited time offer has expired!");
			return;
		}

		const limitedHours = Math.floor(limitedDistance / (1000 * 60 * 60));
		const limitedMinutes = Math.floor(
			(limitedDistance % (1000 * 60 * 60)) / (1000 * 60)
		);
		const limitedSeconds = Math.floor(
			(limitedDistance % (1000 * 60)) / 1000
		);

		document.getElementById("hours").textContent = limitedHours
			.toString()
			.padStart(2, "0");
		document.getElementById("minutes").textContent = limitedMinutes
			.toString()
			.padStart(2, "0");
		document.getElementById("seconds").textContent = limitedSeconds
			.toString()
			.padStart(2, "0");
	}, 1000);
}
