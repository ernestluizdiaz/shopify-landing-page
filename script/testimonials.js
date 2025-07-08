function playVideo(videoNumber) {
	const videoBox = document.getElementById(`video-box-${videoNumber}`);
	videoBox.innerHTML = `
	<video width="100%" height="100%" controls autoplay>
		<source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
		Your browser does not support the video tag.
	</video>
	`;
}

// Add subtle animations on load
document.addEventListener("DOMContentLoaded", function () {
	const cards = document.querySelectorAll(".testimonial-card");
	cards.forEach((card, index) => {
		card.style.opacity = "0";
		card.style.transform = "translateY(20px)";

		setTimeout(() => {
			card.style.transition = "all 0.6s ease";
			card.style.opacity = "1";
			card.style.transform = "translateY(0)";
		}, index * 200);
	});
});
