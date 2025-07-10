document.addEventListener("DOMContentLoaded", function () {
	const questions = document.querySelectorAll(".faq-question");

	questions.forEach((question) => {
		question.addEventListener("click", () => {
			const answer = question.nextElementSibling;

			questions.forEach((q) => {
				if (q !== question) {
					q.classList.remove("active");
					q.nextElementSibling.classList.remove("open");
				}
			});

			question.classList.toggle("active");
			answer.classList.toggle("open");
		});
	});
});
