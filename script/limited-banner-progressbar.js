window.addEventListener("DOMContentLoaded", () => {
	const fill = document.querySelector(".progress-fill");
	fill.style.width = "0%";
	setTimeout(() => {
		fill.style.transition = "width 1.5s cubic-bezier(0.4,0,0.2,1)";
		fill.style.width = "70%"; // Animate to 70%
	}, 200);
});
