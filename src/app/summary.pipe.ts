import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary',
})
export class SummaryPipe implements PipeTransform {
  transform(value: string, size?: number) {
    // let length;
    // if(size) {
    //   length = size;
    // }
    // else
    //   length = 10;

    let length = size || 10;
    return value.substring(0, length) + (value.length > length ? '...' : '');
  }
}
