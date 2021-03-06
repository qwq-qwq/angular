import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {BookService} from '../book.service';
import {Book} from '../book/book';
import {AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {BookValidator} from '../book-validator';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-book-registration',
  templateUrl: './book-registration.component.html',
  styleUrls: ['./book-registration.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookRegistrationComponent implements OnInit {
  @Input()
  book: Book;

  bookForm: FormGroup;

  constructor(private bookService: BookService, formBuilder: FormBuilder) {
    this.bookForm = formBuilder.group({
      title: formBuilder.control('', [Validators.required,
        Validators.minLength(3)]),
      author: formBuilder.control('', [Validators.required, Validators.minLength(4),
        BookValidator.getAuthorValidator()]),
      year: formBuilder.control('', [Validators.pattern('\\d{4}')]),
      pages: formBuilder.control(''),
      description: formBuilder.control('')
    });
    this.bookForm.get('title').setAsyncValidators(this.validateUniqueName.bind(this));
  }

  isNotValid(controlName: string): boolean {
    return this.bookForm.get(controlName).touched &&
      !this.bookForm.get(controlName).valid;
  }

  validateUniqueName(c: AbstractControl): Observable<ValidationErrors> {
    return Observable.of(c.value)
      .map(
        title => this.bookService.isTitleUnique(title))
      .map(flag => {
        if (flag) {
          return null;
        } else {
          return {titleDuplicate: true};
        }
      }).first();
  }

  createBook(): void {
    const book: any = this.bookForm.value;
    this.bookService.saveBook(new Book(
      book.title, book.author, book.year, book.description, book.pages, 0));
  }

  ngOnInit() {
    if (this.book) {
      this.bookForm.get('title').setValue(this.book.title);
      this.bookForm.get('author').setValue(this.book.author);
      this.bookForm.get('pages').setValue(this.book.pages);
      this.bookForm.get('description').setValue(this.book.description);
      this.bookForm.get('year').setValue(this.book.year);
    }
  }

}
