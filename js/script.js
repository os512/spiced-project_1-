const bookmarkIcon = document.querySelector(".card__bookmark");

// Toggle state of bookmark
// 
bookmarkIcon.addEventListener("click", () => {
	if (bookmarkIcon.getAttribute("src") === "./assets/bookmark.png") {
		bookmarkIcon.setAttribute("src", "./assets/bookmark_filled.png");
	} else {
		bookmarkIcon.setAttribute("src", "./assets/bookmark.png");
	}
});

