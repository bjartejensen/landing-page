import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'yaxis',
})
export class YaxisPipe implements PipeTransform {
  transform(value: number): string {
    let val;
    let retval;

    if (Math.abs(value) > 1000000) {
      val = (value / 1000000).toFixed(1);
      retval = `${val}M`;
    } else if (Math.abs(value) > 1000) {
      val = (value / 1000).toFixed(1);
      retval = `${val}K`;
    } else {
      retval = value.toFixed(0);
    }

    return retval;
  }
}
