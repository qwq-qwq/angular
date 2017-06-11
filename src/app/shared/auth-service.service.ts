import {Injectable} from '@angular/core';

@Injectable()
export class AuthService {

  constructor() {
  }

  isValidUser(username: string, password: string): boolean {
    return true;
  }

  isLoggedIn(): boolean {
    return true;
  }

}
