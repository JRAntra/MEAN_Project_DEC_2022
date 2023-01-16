import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    if (value.length > 20){
      return value.substring(0,20) + "..."
    } else {
      return value
    }
  }
}
