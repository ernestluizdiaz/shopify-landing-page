let chartCurrentSlide = 0;
const chartSlides = document.querySelectorAll(".chart-slide");

function chartShowSlide(index) {
	chartSlides.forEach((slide, i) => {
		slide.classList.toggle("active", i === index);
	});
	chartCurrentSlide = index;
}

function chartNextSlide() {
	const nextIndex = (chartCurrentSlide + 1) % chartSlides.length;
	chartShowSlide(nextIndex);
}

function chartPrevSlide() {
	const prevIndex =
		(chartCurrentSlide - 1 + chartSlides.length) % chartSlides.length;
	chartShowSlide(prevIndex);
}

// Optional: activate first slide on load
chartShowSlide(chartCurrentSlide);
