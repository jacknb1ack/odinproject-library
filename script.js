const myLibrary = [];

function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

let book1 = new Book("The Necromancer", "Michael Scott", 403, "Not Read");
let book2 = new Book("The Warlock", "Michael Scott", 400, "Not Read");
let book3 = new Book("The Alchemist", "Michael Scott", 400, "Not Read");
myLibrary.push(book1, book2, book3);

function addBookToLibrary() {}

function deleteBook(index) {
  myLibrary.splice(index, 1);
}

const addBookButton = document.querySelector("#add-book");
addBookButton.addEventListener("click", () => {
  const formInput = document.querySelector(".add-form");
  formInput.setAttribute("style", "display:flex;");
});

const cancelButton = document.querySelector("#cancel-button");
cancelButton.addEventListener("click", () => {
  const formInput = document.querySelector(".add-form");
  formInput.setAttribute("style", "display:none;");
});

// display each book in mylibrary to book-card
for (const key in myLibrary) {
  const bookContainer = document.querySelector(".content");
  const bookCard = document.createElement("div");
  bookCard.classList.add("book-item");

  const indexNum = myLibrary.findIndex((obj) => {
    return obj.title === myLibrary[key].title;
  });

  // const indexNumber = document.createElement("p");
  // indexNumber.setAttribute("style", "display:none;");
  // indexNumber.classList.add("index-number");
  // indexNumber.textContent = indexNum;

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

  const deleteButton = document.createElement("button");
  deleteButton.setAttribute("id", "delete");
  deleteButton.addEventListener("click", () => {
    bookCard.remove();
    myLibrary.splice(0, 1);
  });
  const toggleButton = document.createElement("button");
  toggleButton.setAttribute("id", "visibility");

  // bookCard.appendChild(indexNumber);
  bookCard.appendChild(bookTitle);
  bookCard.appendChild(bookAuthor);
  bookCard.appendChild(bookPages);
  bookCard.appendChild(bookStatus);

  const actionBar = document.createElement("div");
  actionBar.classList.add("action");

  toggleButton.appendChild(visibility);
  deleteButton.appendChild(deleteBook);

  actionBar.appendChild(toggleButton);
  actionBar.appendChild(deleteButton);

  bookCard.appendChild(actionBar);
  bookContainer.appendChild(bookCard);

  // const deleteButton = document.querySelector(".delete");

  console.log(indexNum);
}

console.dir(myLibrary);
