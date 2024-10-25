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
