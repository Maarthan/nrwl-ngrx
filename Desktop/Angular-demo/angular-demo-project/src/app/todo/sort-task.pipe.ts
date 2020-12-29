import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortTask'
})
export class SortTaskPipe implements PipeTransform {

  transform(value: Array<string>, ...args: unknown[]): unknown {
    return value.sort((a,b) => {
      let x = a.toLocaleLowerCase();
      let y = b.toLocaleLowerCase();
      return x < y ? -1 : 1;
    });
  }

}
