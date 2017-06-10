import {Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild} from '@angular/core';
import {Book} from '../book/book';
import {CurrencyPipe} from '@angular/common';
import {BookService} from '../book.service';
import {Observable} from 'rxjs/Rx';
import {Http} from '@angular/http';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  bookNumber: number;

  books: Array<Book>;

  constructor(private bookService: BookService, http: Http,
  private el: ElementRef) {
    this.refreshBooks();
    // http.get('/books.json').subscribe(response => this.books = response.json() || []);
    this.createObservable();
  }

  private createObservable() {
    Observable.range(0, 25).map(x => String.fromCharCode(x + 'a'.charCodeAt(0)))
      .subscribe(x => console.log(x));
  }

   refreshBooks(): void {
     this.books = this.bookService.getBooks();
   }

}
