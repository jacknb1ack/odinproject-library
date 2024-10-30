const myLibrary = [];

class Book {
  constructor(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
  }
}

let book1 = new Book("The Necromancer", "Michael Scott", 403, "Not Read");
let book2 = new Book("The Warlock", "Michael Scott", 400, "Read");
let book3 = new Book("The Alchemist", "Michael Scott", 400, "Not Read");
let book4 = new Book("The Alchemist", "Michael Scott", 400, "Read");
let book5 = new Book("The Alchemist", "Michael Scott", 400, "Not Read");
myLibrary.push(book1, book2, book3);

const addBook = document.querySelector("#add-book-button");
addBook.addEventListener("click", (e) => {
  e.preventDefault();
  addBookToLibrary();
});

function addBookToLibrary() {
  const bookTitle = document.getElementById("title").value;
  const bookAuthor = document.getElementById("author").value;
  const bookPages = document.getElementById("pages").value;
  const bookStatus = document.getElementById("status").value;

  if (bookTitle === "" || bookAuthor === "" || bookPages < 1) {
    alert("All field must not be empty!");
  } else {
    let newBook = new Book(bookTitle, bookAuthor, bookPages, bookStatus);
    myLibrary.push(newBook);
    document.querySelector("form").reset();
    updateCard();
  }
}

//add button to display add new book form
const addBookButton = document.querySelector("#add-book");
addBookButton.addEventListener("click", () => {
  const formInput = document.querySelector(".add-form");
  formInput.setAttribute("style", "display:flex;");
});

// add button to hide form
const cancelButton = document.querySelector("#cancel-button");
cancelButton.addEventListener("click", () => {
  const formInput = document.querySelector(".add-form");
  formInput.setAttribute("style", "display:none;");
});

// display each book in mylibrary to book-card
function updateCard() {
  const bookContainer = document.querySelector(".content");
  bookContainer.innerHTML = "";

  for (const index in myLibrary) {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-item");

    const indexNum = myLibrary.findIndex((obj) => {
      return obj.title === myLibrary[index].title;
    });

    const bookTitle = document.createElement("p");
    bookTitle.classList.add("title");
    bookTitle.textContent = myLibrary[index].title;

    const bookAuthor = document.createElement("p");
    bookAuthor.classList.add("author");
    bookAuthor.textContent = myLibrary[index].author;

    const bookPages = document.createElement("p");
    bookPages.classList.add("pages");
    bookPages.textContent = myLibrary[index].pages;

    const bookStatus = document.createElement("p");
    bookStatus.classList.add("status");
    bookStatus.textContent = myLibrary[index].status;

    // toggle read/not read status button
    const visibility = document.createElement("span");
    visibility.classList.add("material-symbols-outlined");
    visibility.classList.add("visibility");
    if (myLibrary[index].status === "Not Read") {
      visibility.textContent = "visibility";
    } else {
      visibility.textContent = "visibility_off";
    }

    const toggleButton = document.createElement("button");
    toggleButton.setAttribute("id", "visibility");
    toggleButton.addEventListener("click", () => {
      if (myLibrary[index].status === "Not Read") {
        myLibrary[index].status = "Read";
        visibility.textContent = "visibility_off";
        bookStatus.textContent = myLibrary[index].status;
      } else {
        myLibrary[index].status = "Not Read";
        visibility.textContent = "visibility";
        bookStatus.textContent = myLibrary[index].status;
      }
    });

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
  }
}

updateCard();
