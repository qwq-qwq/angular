import { Injectable } from '@angular/core';
import {Book} from "./book/book";

@Injectable()
export class BookService {

  books: Array<Book>;

  constructor() {
    this.books = new Array<Book>();
    this.addBook(new Book("JavaScript: The Good Parts", "Douglas Crockford", 2008,
      "This authoritative book scrapes away these bad features to reveal a subset of JavaScript that's more reliable, readable, and maintainable", 172, 150.344));
    this.addBook(new Book("Mastering TypeScript", "Nathan Rozentals", 2015, "Build enterprise-ready, industrial strength web applications using TypeScript and leading JavaScript frameworks", 364, 20));
    this.addBook(new Book("Switching to Angular 2", "Minko Gechev", 2016, "Start using TypeScript to supercharge your Angular 2 applications", 254, 10));
  }

  getBooks(): Array<Book> {
    return this.books;
  }

  private addBook(book:Book): void {
    this.books.push(book);
  }

  saveBook(book: Book): void {
     this.addBook(book);
  }

}
