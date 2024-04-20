const bookmarkIcons = document.querySelectorAll(".card__bookmark");

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

