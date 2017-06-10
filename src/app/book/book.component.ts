import {Component, Input, OnInit} from '@angular/core';
import {Book} from "./book";
import {CurrencyPipe} from "@angular/common";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent{
  @Input()
  book: Book;

  charNumber: number;

  constructor(private currencyPipe : CurrencyPipe) {
 }

  formatPrice(book: Book) : string {
    return this.currencyPipe.transform(book.price);
  }

  displayNumber(value: any): void {
    let text = value.toString();
    this.charNumber = text.length;
  }
}
