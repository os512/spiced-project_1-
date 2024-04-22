(function () {
	"use strict";

	const main = document.querySelector(".main__profile"),
		darkmodeToggle = document.querySelector('[data-toggle="checkbox-toggle-darkmode"]'),
		body = document.querySelector("body"),
		h2s = main.querySelectorAll("h2"),
		paragraphs = main.querySelectorAll("p");

	darkmodeToggle.checked = false;

	darkmodeToggle.addEventListener("change", (e) => {
		if (e.target.checked) {
			body.style.backgroundColor = "var(--color-dark-600)";
			body.style.color = "var(--color-dark-100)";
			h2s.forEach((h2) => (h2.style.color = "var(--color-dark-100)"));
			paragraphs.forEach((paragraph) => (paragraph.style.color = "var(--color-dark-100)"));
		} else {
			body.style.backgroundColor = "var(--color-dark-100)";
			body.style.color = "var(--color-dark-500)";
			h2s.forEach((h2) => (h2.style.color = "var(--color-dark-900)"));
			paragraphs.forEach((paragraph) => (paragraph.style.color = "var(--color-dark-900)"));
		}
	});
})();
