import {Component, OnInit} from '@angular/core';
import {BookService} from '../book.service';
import {Book} from '../book/book';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-book-registration',
  templateUrl: './book-registration.component.html',
  styleUrls: ['./book-registration.component.css']
})
export class BookRegistrationComponent implements OnInit {
  private bookForm: FormGroup;

  constructor(private bookService: BookService, formBuilder: FormBuilder) {
    this.bookForm = formBuilder.group({
      title: formBuilder.control('', [Validators.required,
        Validators.minLength(3)]),
      author: formBuilder.control('', [Validators.required, Validators.minLength(4)]),
      year: formBuilder.control('', [Validators.pattern('\\d{4}')]),
      pages: formBuilder.control(''),
      description: formBuilder.control('')
    });
  }

  isNotValid(controlName: string): boolean {
    return this.bookForm.get(controlName).touched &&
      !this.bookForm.get(controlName).valid;
  }

  createBook(): void {
    const book: any = this.bookForm.value;
    this.bookService.saveBook(new Book(
      book.title, book.author, book.year, book.description, book.pages, 0));
  }

  ngOnInit() {
  }

}
