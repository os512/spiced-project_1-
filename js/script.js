const bookmarkIcons = document.querySelectorAll(".card__bookmark");
const answers = document.querySelectorAll(".card__answer");
const showAnswerButtons = document.querySelectorAll(".quiz-button__showAnswer");

/**
 * Toggles the state of bookmarks via click.
 *
 * @param {NodeList} bookmarkIcons - The list of bookmark icons.
 */
bookmarkIcons.forEach((bookmarkIcon) => {
	bookmarkIcon.addEventListener("click", () => {
		if (bookmarkIcon.getAttribute("src") === "./assets/bookmark.png") {
			bookmarkIcon.setAttribute("src", "./assets/bookmark_filled.png");
		} else {
			bookmarkIcon.setAttribute("src", "./assets/bookmark.png");
		}
	});
});

/**
 * Shows/hides answers on click.
 *
 * @param {NodeList} showAnswerButtons - The list of show answer buttons.
 * @param {NodeList} answers - The list of answer elements.
 */
showAnswerButtons.forEach((showAnswerButton, i) => {
	showAnswerButton.addEventListener("click", () => {
		showAnswerButton.textContent === "Hide answer"
			? (showAnswerButton.textContent = "Show answer")
			: (showAnswerButton.textContent = "Hide answer");

		answers.forEach((answer, j) => (i === j ? answer.classList.toggle("hidden") : false));
	});
});
