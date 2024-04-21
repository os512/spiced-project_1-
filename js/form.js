(function () {
	"use strict";

	const main = document.querySelector(".main__form");
	const userCreatedQuestion = main.querySelector('[data-form-question="form-question"]');
	const userCreatedAnswer = main.querySelector('[data-form-answer="form-answer"]');
	const userCreatedTag = main.querySelector('[data-form-tag="form-tag"]');
	const form = main.querySelector('[data-form="form-new-quiz-card"]');
	
	form.addEventListener("submit", (e) => {
		e.preventDefault();
		createSectionChildElements();
	});

	function createSection() {
		const section = document.createElement("section");
		section.classList.add("card__question");

		main.append(section);

		return section;
	}

	function createSectionChildElements() {
		const section = createSection();

		// Create Image element
		//
		const image = document.createElement("img");
		image.classList.add("card__bookmark");
		image.setAttribute("src", "../assets/bookmark.png");
		image.setAttribute("alt", "Bookmark this quiz card by clicking here!");

		// Create title element
		//
		const title = document.createElement("h2");
		title.classList.add("card__title");
		title.textContent = userCreatedQuestion.value;

		// Create anchor element
		//
		const anchor = document.createElement("a");
		anchor.classList.add("button__quiz", "button__showAnswer");
		anchor.setAttribute("aria-label", "Show answer");
		anchor.textContent = "Show answer";

		// Create paragraph element
		//
		const paragraph = document.createElement("p");
		paragraph.classList.add("card__answer", "hidden");
		paragraph.textContent = userCreatedAnswer.value;

		// Create tag element
		//
		const tag = document.createElement("a");
		tag.classList.add("tag");
		tag.setAttribute("aria-label", "Category: characters");
		tag.setAttribute("href", "#");
		tag.textContent = `#${userCreatedTag.value}`;

		// Append all elements to section
		//
		section.append(image, title, anchor, paragraph, tag);
	}
})();
