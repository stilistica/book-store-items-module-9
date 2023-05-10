import api from "./scripts/api.js";

const addAuthorFormEl = document.getElementById("addAuthorForm");
const authorsNumberEl = document.getElementById("authorsNumber");
const authorsEl = document.getElementById("authors");


const renderAuthors = () => {
	api.getAuthors().then(authors => {
		authorsEl.innerHTML = "";
		authorsNumberEl.textContent = `There are ${authors.length} authors in the system`;

		authors.forEach((authorName) => {
			// 1: authorsEl.innerHTML = `<li>${authorName}</li>` or 2:
			const el = document.createElement("li");
			el.textContent = authorName.trim();
			authorsEl.appendChild(el)
		});
	});
}

const addAuthorFromHandler = (event) => {
	event.preventDefault();
	const authorName = event.target.authorName.value;

	if (authorName) {
		api.addAuthor(authorName);
		renderAuthors();
	}
}



addAuthorFormEl.addEventListener("submit", addAuthorFromHandler);