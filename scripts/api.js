const authors = [];

const addAuthor = (authorName) => {
	authors.push(new Promise((resolve, reject) => {
		setTimeout(() => {
			authorName ? resolve(authorName) : reject("No name")
		}, 2000);
	}));
};

const getAuthors = () => Promise.all(authors);

export default {
	addAuthor,
	getAuthors,
};