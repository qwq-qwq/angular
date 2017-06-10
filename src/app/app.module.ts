import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import {BookService} from "./book.service";
import { QuotePipe } from './quote.pipe';
import {CurrencyPipe} from "@angular/common";
import { BookRegistrationComponent } from './book-registration/book-registration.component';
import { StyleDirective } from './style.directive';
import { JavaScriptClassDirective } from './java-script-class.directive';
import { BooksComponent } from './books/books.component';
import { SortPipe } from './sort.pipe';
import { ShowDirective } from './show.directive';
import {GlobalEventService} from "./global-event.service";
import { StatusComponent } from './status/status.component';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    QuotePipe,
    BookRegistrationComponent,
    StyleDirective,
    JavaScriptClassDirective,
    BooksComponent,
    SortPipe,
    ShowDirective,
    StatusComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [BookService, CurrencyPipe, GlobalEventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
