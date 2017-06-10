import {Component, OnInit} from '@angular/core';
import {BookService} from "../book.service";
import {Book} from "../book/book";

@Component({
  selector: 'app-book-registration',
  templateUrl: './book-registration.component.html',
  styleUrls: ['./book-registration.component.css']
})
export class BookRegistrationComponent implements OnInit {

  constructor(private bookService: BookService) {
  }

  createBook(book: any): void {

    this.bookService.saveBook(new Book(
      book.title, book.author, book.year, book.description, book.pages, 0));
  }

  ngOnInit() {
  }

}
