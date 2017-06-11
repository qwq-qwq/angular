import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any, ...args: Array<any>): any {
    if (!value) {
      return value;
    }
    if (!Array.isArray(value)) {
      return value;
    }
    const items: Array<any> = value;
    const name: string = args[0];
    items.sort((a: any, b: any) => {
      if (a[name] > b[name]) {
        return 1;
      } else if (a[name] < b[name]) {
        return -1;
      }
      return 0;
    });

    return value;
  }

}
