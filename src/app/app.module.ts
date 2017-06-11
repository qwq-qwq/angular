import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {BookComponent} from './books/book/book.component';
import {BookService} from './books/book.service';
import {QuotePipe} from './books/quote.pipe';
import {CurrencyPipe} from '@angular/common';
import {BookRegistrationComponent} from './books/book-registration/book-registration.component';
import {StyleDirective} from './books/style.directive';
import {JavaScriptClassDirective} from './books/java-script-class.directive';
import {BooksComponent} from './books/books/books.component';
import {SortPipe} from './books/sort.pipe';
import {ShowDirective} from './books/show.directive';
import {GlobalEventService} from './books/global-event.service';
import {StatusComponent} from './books/status/status.component';
import {GlobalSyncService} from './books/global-emitter-service.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BookDetailWindowComponent} from './books/book-detail-window/book-detail-window.component';
import {RouterModule} from "@angular/router";
import {ROUTES} from "./app.routes";
import {NewsModule} from "./news/news.module";
import {BooksModule} from "./books/books.module";

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(ROUTES),
    NewsModule,
    BooksModule/*,
     BrowserAnimationsModule,
     MdCheckboxModule,
     MdButtonModule*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
