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
import {GlobalSyncService} from "./global-emitter-service.service";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { BookDetailWindowComponent } from './book-detail-window/book-detail-window.component';

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
    StatusComponent,
    BookDetailWindowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    NgbModule.forRoot()
  ],
  providers: [BookService, CurrencyPipe, GlobalEventService, GlobalSyncService],
  bootstrap: [AppComponent],
  entryComponents: [BookDetailWindowComponent]
})
export class AppModule { }
