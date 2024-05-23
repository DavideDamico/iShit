/** @format */

const application = require('./App');

const app = new application();

// app.register('asdasd', 'asdasd', 'asdasd');

// app.login('asdasd', 'asdasd');

// app.addFeedback('asdasd', '3');

// app.addShitCounter();
// app.increaseShitCounter();

// app.getFact();

// app.getMeme();

class Books {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}
class Library {
  books = [];

  addBook(title, author) {
    const book = new Books(title, author);
    this.books.push(book);
  }

  findTitle(title) {
    const titleFound = this.books.find(function (book) {
      return book.title === title;
    });
    if (!titleFound) return console.log('This book doesnt exist');
    else return titleFound;
  }

  removeBook(title) {
    this.books = this.books.filter(book => book.title !== title);
  }

  listAuthors() {
    const authors = this.books.map(book => book.author);
    const isDuplicate = authors.filter((author, index) => authors.indexOf(author) !== index);
    if (isDuplicate === authors) return authors;
    else return isDuplicate;
  }
}
