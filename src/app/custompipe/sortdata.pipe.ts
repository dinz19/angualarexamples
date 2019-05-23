import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortdata'
})
export class SortdataPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (args == 'asc') {
      return value.sort()
    }
    if (args == 'dsc') {
      return value.sort().reverse()
    }
    return value.sort()
  }
}
