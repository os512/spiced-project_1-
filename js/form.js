(function () {
	"use strict";

	const main = document.querySelector(".main__form"),
		userCreatedQuestion = main.querySelector('[data-form-question="form-question"]'),
		userCreatedAnswer = main.querySelector('[data-form-answer="form-answer"]'),
		userCreatedTag = main.querySelector('[data-form-tag="form-tag"]'),
		form = main.querySelector('[data-form="form-new-quiz-card"]'),
		charCountPrintQuestion = main.querySelector('[data-js="amountLeft-form-question"]'),
		charCountPrintAnswer = main.querySelector('[data-js="amountLeft-form-answer"]');

	form.addEventListener("submit", (e) => {
		e.preventDefault();

		// Storing returned object of newly created elements
		const createdCardElements = createSectionChildElements();

		// Add toggle functionality for bookmark icon
		//
		createdCardElements.image.addEventListener("click", (e) => {
			if (e.target.getAttribute("src") === "../assets/bookmark.png") {
				e.target.setAttribute("src", "../assets/bookmark_filled.png");
			} else {
				e.target.setAttribute("src", "../assets/bookmark.png");
			}
		});

		// Add toggle functionality for show/hide answer button
		//
		createdCardElements.anchor.addEventListener("click", (e) => {
			if (e.target.textContent === "Hide answer") {
				e.target.textContent = "Show answer";
				e.target.setAttribute("aria-label", "Show answer");
			} else {
				e.target.textContent = "Hide answer";
				e.target.setAttribute("aria-label", "Hide answer");
			}
			// Hide/unhide answer
			createdCardElements.paragraph.classList.toggle("hidden");
		});
	});

	/**
	 * Creates a section element.
	 *
	 * @returns {Object} - An object containing the created section element.
	 */
	function createSection() {
		const section = document.createElement("section");
		section.classList.add("card__question");

		main.append(section);

		return section;
	}

	/**
	 * Creates child elements for a section and returns them as an object.
	 *
	 * @returns {Object} - An object containing the created child elements.
	 */
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

		return { image, title, anchor, paragraph, tag };
	}

	/////////////////////////////
	/////  ⬇︎  TESTZONE  ⬇︎  /////
	/////////////////////////////

	// Counting question input
	//
	const maxLengthQuestion = +userCreatedQuestion.getAttribute("maxlength");

	const updateCharatersLeftQuestion = (value) => {
		charCountPrintQuestion.textContent = value;
	};
	updateCharatersLeftQuestion(maxLengthQuestion);

	// Retrieve correct number for exisiting text before input event is triggered
	updateCharatersLeftQuestion(maxLengthQuestion - +userCreatedQuestion.value.length);

	userCreatedQuestion.addEventListener("input", () => {
		updateCharatersLeftQuestion(maxLengthQuestion - +userCreatedQuestion.value.length);
	});


	
	// Counting answer input
	//
	const maxLengthAnswer = +userCreatedAnswer.getAttribute("maxlength");
	
	const updateCharatersLeftAnswer = (value) => {
		charCountPrintAnswer.textContent = value;
	};
	updateCharatersLeftAnswer(maxLengthAnswer);

	// Retrieve correct number for exisiting text before input event is triggered
	updateCharatersLeftAnswer(maxLengthAnswer - +userCreatedAnswer.value.length);

	userCreatedAnswer.addEventListener("input", () => {
		updateCharatersLeftAnswer(maxLengthAnswer - +userCreatedAnswer.value.length);
	});



	/////////////////////////////
	/////  ⬆︎  TESTZONE  ⬆︎  /////
	/////////////////////////////
})();
