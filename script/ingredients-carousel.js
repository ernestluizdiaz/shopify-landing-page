let currentSlide = 0;
const totalSlides = 4;
const track = document.getElementById("carouselTrack");
const indicators = document.querySelectorAll(".indicator");

function updateCarousel() {
	const translateX = -currentSlide * 100;
	track.style.transform = `translateX(${translateX}%)`;

	// Update indicators
	indicators.forEach((indicator, index) => {
		indicator.classList.toggle("active", index === currentSlide);
	});
}

function nextSlide() {
	currentSlide = (currentSlide + 1) % totalSlides;
	updateCarousel();
}

function previousSlide() {
	currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
	updateCarousel();
}

function goToSlide(index) {
	currentSlide = index;
	updateCarousel();
}

// Auto-advance the carousel every 5 seconds
setInterval(nextSlide, 5000);

// Touch/swipe support for mobile
let startX = 0;
let endX = 0;

track.addEventListener("touchstart", (e) => {
	startX = e.touches[0].clientX;
});

track.addEventListener("touchend", (e) => {
	endX = e.changedTouches[0].clientX;
	const difference = startX - endX;

	if (Math.abs(difference) > 50) {
		if (difference > 0) {
			nextSlide();
		} else {
			previousSlide();
		}
	}
});
