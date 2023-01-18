import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstFewChars'
})
export class FirstFewCharsPipe implements PipeTransform {

  transform(value: string): string {
    if (value.length > 20) {
      return value.substring(0,20);
    } else {
      return value;
    }
  }

}
