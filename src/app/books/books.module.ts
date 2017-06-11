import {NgModule} from '@angular/core';
import {CommonModule, CurrencyPipe} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BookDetailWindowComponent} from './book-detail-window/book-detail-window.component';
import {StatusComponent} from './status/status.component';
import {ShowDirective} from './show.directive';
import {SortPipe} from './sort.pipe';
import {BooksComponent} from './books/books.component';
import {JavaScriptClassDirective} from './java-script-class.directive';
import {StyleDirective} from './style.directive';
import {BookRegistrationComponent} from './book-registration/book-registration.component';
import {QuotePipe} from './quote.pipe';
import {BookComponent} from './book/book.component';
import {AppComponent} from '../app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpModule} from '@angular/http';
import {BrowserModule} from '@angular/platform-browser';
import {BookService} from './book.service';
import {GlobalSyncService} from './global-emitter-service.service';
import {GlobalEventService} from './global-event.service';
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    NgbModule,
    RouterModule
  ],
  providers: [
    BookService, CurrencyPipe, GlobalEventService, GlobalSyncService
  ],
  declarations: [AppComponent,
    BookComponent,
    QuotePipe,
    BookRegistrationComponent,
    StyleDirective,
    JavaScriptClassDirective,
    BooksComponent,
    SortPipe,
    ShowDirective,
    StatusComponent,
    BookDetailWindowComponent],
  entryComponents: [BookDetailWindowComponent],
  exports: [BooksComponent, StatusComponent]
})
export class BooksModule {
}
