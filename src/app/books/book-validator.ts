import {FormControl} from '@angular/forms';
export class BookValidator {

   static getAuthorValidator() {
      return function authorBookValidator(c: FormControl): {[s: string]: boolean} {
          const tokens: Array<string> = c.value.split(' ');
          if (tokens.length < 2) {
             return { invalidWordNumber: true};
          }
      };
   }
}
