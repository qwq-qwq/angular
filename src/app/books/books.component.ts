import {Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild} from '@angular/core';
import {Book} from '../book/book';
import {CurrencyPipe} from '@angular/common';
import {BookService} from '../book.service';
import {Observable} from 'rxjs/Rx';
import {Http} from '@angular/http';
import {Observer} from 'rxjs/Observer';
import {GlobalEventService} from '../global-event.service';
import {ApplicationEvent} from '../application-event';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit{
  ngOnInit(): void {
    this.refreshBooks();
  }

  bookNumber: number;

  books: Array<Book>;

  charNumber: number;

  visible= true;

  counter = 1;

  constructor(private bookService: BookService, http: Http,
              private el: ElementRef, private eventService: GlobalEventService) {
    // this.refreshBooks();
    // http.get('/books.json').subscribe(response => this.books = response.json() || []);
    // this.createLatinCharacters();
    // this.createPrimeNumbers();
  }

  private createLatinCharacters() {
    Observable.range(0, 25).map(x => String.fromCharCode(x + 'a'.charCodeAt(0)))
      .subscribe(x => console.log(x));
  }

  private async generate(): Promise<number> {
     let valid = true;
     for (let i = this.counter; i < 1000000; i++) {
       for (let j = 2; j < this.counter; j++) {
          if (i % j === 0) {
              valid = false;
              break;
          }
       }
       if (valid) {
         return Promise.resolve(this.counter);
       } else {
          this.counter++;
       }
       valid = true;
     }
     return null;
  }

  private createPrimeNumbers() {
    // Observable.create((observer: Observer<number>) => {
    //     const x = await this.generate();
    // }).take(10).subscribe( x => console.log(x));
  }

  refreshBooks(): void {
    this.eventService.sendEvent(new ApplicationEvent('Books', 'Books is loading ... '));
    const observable: Observable<Array<Book>> = this.bookService.getBooks();
    observable.subscribe( value => this.books = value, err => {},
      () => this.eventService.sendEvent(new ApplicationEvent('Books', 'Books were loaded')));
  }

}
