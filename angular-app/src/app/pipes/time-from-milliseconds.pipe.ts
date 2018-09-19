import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'TimeFromMillisecondsPipe'
})
export class TimeFromMillisecondsPipe implements PipeTransform {

  transform(milliseconds: number, args?: any): any {

    let h = Math.floor(milliseconds / 1000 / 60);

    let s = Math.floor(milliseconds / 1000) % 60;

    return `${h}:${s < 10 ? '0' + s : s}`;
  }

}
