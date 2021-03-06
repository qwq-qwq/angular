import {Routes} from '@angular/router';
import {NewsComponent} from './news/news/news.component';
import {BooksComponent} from './books/books/books.component';
import {AdminComponent} from "./administration/admin/admin.component";
import {LoginComponent} from "./login/login.component";
import {AuthGuard} from "./auth.guard";
/**
 * Created by IT-Discovery on 11.06.2017.
 */
export const ROUTES: Routes = [
  {path: '', component: NewsComponent},
  {path: 'books', component: BooksComponent},
  {path: 'admin', component: AdminComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
];
