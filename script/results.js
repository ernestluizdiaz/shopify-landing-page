function playYouTubeVideo(card) {
	const videoId = card.getAttribute("data-video-id");
	const thumbnail = card.querySelector(".video-thumbnail");

	thumbnail.innerHTML = `
    <video width="100%" height="100%" controls autoplay>
		<source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
		Your browser does not support the video tag.
	  </video>
    `;
}
