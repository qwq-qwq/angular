import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Book} from './book';
import {CurrencyPipe} from '@angular/common';
import {ApplicationEvent} from '../application-event';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {BookDetailWindowComponent} from '../book-detail-window/book-detail-window.component';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent{
  @Input()
  book: Book;

  @Input()
  visibility: boolean;

  @Output()
  renderEvent: EventEmitter<ApplicationEvent> = new EventEmitter();

  charNumber: number;

  constructor(private currencyPipe : CurrencyPipe, private modalService: NgbModal) {
  }

  handleClick() {
     this.renderEvent.emit(new ApplicationEvent('Book ' + this.book.title, 'Click event'));
  }

  openDetail(): void {
      const modalRef: NgbModalRef = this.modalService.open(BookDetailWindowComponent);
      modalRef.componentInstance.book = this.book;

  }

  formatPrice(book: Book) : string {
    return this.currencyPipe.transform(book.price);
  }

  displayNumber(value: any): void {
    const text = value.toString();
    this.charNumber = text.length;
  }
}
