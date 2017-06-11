import {Routes} from '@angular/router';
import {NewsComponent} from './news/news/news.component';
import {BooksComponent} from './books/books/books.component';
/**
 * Created by IT-Discovery on 11.06.2017.
 */
export const ROUTES: Routes = [
  {
    'path': '', 'component': NewsComponent
  },
  {
    'path': 'books', 'component': BooksComponent
  }
];
