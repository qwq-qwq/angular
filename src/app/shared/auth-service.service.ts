import {Injectable} from '@angular/core';
import {isNullOrUndefined} from "util";
import {User} from "./user";

@Injectable()
export class AuthService {

  loggedUser: string;

  users: Array<User> = new Array();

  constructor() {
    this.users.push(new User('guest', 'guest'));
    this.users.push(new User('admin', 'admin'));
  }

  login(username: string, password: string): boolean {
    const idx: number = this.users.findIndex((user: User, index, obj) =>
    user.username === username &&
    user.password === password);

    if (idx !== -1) {
      this.loggedUser = this.users[idx].username;
      return true;
    }
    return false;
  }

  isLoggedIn(): boolean {
    return !isNullOrUndefined(this.loggedUser);
  }

}
