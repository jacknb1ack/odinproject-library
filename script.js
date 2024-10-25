const myLibrary = [];

function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

function addBookToLibrary() {}

let book1 = new Book("The Necromancer", "Michael Scott", 403, "Not Read");
let book2 = new Book("The Warlock", "Michael Scott", 400, "Not Read");
let book3 = new Book("The Alchemist", "Michael Scott", 400, "Not Read");

myLibrary.push(book1, book2, book3);

console.log(myLibrary);

for (const key in myLibrary) {
  const bookContainer = document.querySelector(".content");
  const bookCard = document.createElement("div");
  bookCard.classList.add("book-item");

  const bookTitle = document.createElement("p");
  bookTitle.classList.add("title");
  bookTitle.textContent = myLibrary[key].title;

  const bookAuthor = document.createElement("p");
  bookAuthor.classList.add("author");
  bookAuthor.textContent = myLibrary[key].author;

  const bookPages = document.createElement("p");
  bookPages.classList.add("pages");
  bookPages.textContent = myLibrary[key].pages;

  const bookStatus = document.createElement("p");
  bookStatus.classList.add("status");
  bookStatus.textContent = myLibrary[key].status;

  const visibility = document.createElement("span");
  visibility.classList.add("material-symbols-outlined");
  visibility.classList.add("visibility");
  visibility.textContent = "visibility";

  const deleteBook = document.createElement("span");
  deleteBook.classList.add("material-symbols-outlined");
  deleteBook.classList.add("delete");
  deleteBook.textContent = "delete";

  bookCard.appendChild(bookTitle);
  bookCard.appendChild(bookAuthor);
  bookCard.appendChild(bookPages);
  bookCard.appendChild(bookStatus);

  const actionBar = document.createElement("div");
  actionBar.classList.add("action");

  actionBar.appendChild(visibility);
  actionBar.appendChild(deleteBook);

  bookCard.appendChild(actionBar);
  bookContainer.appendChild(bookCard);

  console.log(myLibrary[key].title);
}
