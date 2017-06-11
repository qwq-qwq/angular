import {Directive, HostBinding, Input, OnInit} from '@angular/core';
import {Book} from "./book/book";

@Directive({
  selector: '[appJavaScriptClass]'
})
export class JavaScriptClassDirective implements OnInit{
  @Input()
  currentBook: Book;

  @HostBinding('class')
  classValue: string;

  private isJavaScript(book: Book): boolean {
    return book.title.toUpperCase().indexOf("JAVASCRIPT") != -1;
  }

  ngOnInit(): void {
     this.classValue = this.isJavaScript(this.currentBook)? 'javascript' : '';
  }
}
