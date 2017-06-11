import {Component, Input, OnInit} from '@angular/core';
import {Book} from "../book/book";

@Component({
  selector: 'app-book-detail-window',
  templateUrl: './book-detail-window.component.html',
  styleUrls: ['./book-detail-window.component.css']
})
export class BookDetailWindowComponent implements OnInit {
  @Input()
  book: Book;

  constructor() { }

  ngOnInit() {
  }

}
