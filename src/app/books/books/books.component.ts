import {Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild} from '@angular/core';
import {Book} from '../book/book';
import {BookService} from '../book.service';
import {Observable} from 'rxjs/Rx';
import {Http} from '@angular/http';
import {Observer} from 'rxjs/Observer';
import {GlobalEventService} from '../global-event.service';
import {ApplicationEvent} from '../application-event';
import {GlobalSyncService} from "../global-emitter-service.service";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  bookNumber: number;

  books: Array<Book>;

  charNumber: number;

  visible = true;

  counter = 1;

  constructor(private bookService: BookService, http: Http,
              private el: ElementRef, /* private eventService: GlobalEventService*/
              private eventService: GlobalSyncService) {
    // this.refreshBooks();
    // http.get('/books.json').subscribe(response => this.books = response.json() || []);
    // this.createLatinCharacters();
    // this.createPrimeNumbers();
  }

  handleChildClick(event: ApplicationEvent): void {
    console.log('Received event from: ' + event.source + ': ' + event.message);
  }

  ngOnInit(): void {
    this.refreshBooks();
  }

  private createLatinCharacters() {
    Observable.range(0, 25).map(x => String.fromCharCode(x + 'a'.charCodeAt(0)))
      .subscribe(x => console.log(x));
  }

  private generate(start: number): number {
    for (let i = start; i < 100000000; i++) {
      let valid = true;
      for (let j = 2; j < i; j++) {
        if (i % j === 0) {
          valid = false;
          break;
        }
      }
      if (valid) {
        return i;
      }
    }
    return null;
  }

  private createPrimeNumbers() {
    Observable.create((observer: Observer<number>) => {
      let start = 1;
      while (start != null) {
        observer.next(start);
        start = this.generate(start + 1);
      }
      observer.complete();

    }).take(3).subscribe((x: any) => console.log(x));
  }

  refreshBooks(): void {
    this.eventService.sendEvent(new ApplicationEvent('Books', 'Books is loading ... '));
    const observable: Observable<Array<Book>> = this.bookService.getBooks();
    observable.subscribe(value => this.books = value, err => {
      },
      () => this.eventService.sendEvent(new ApplicationEvent('Books', 'Books were loaded')));
  }

}
