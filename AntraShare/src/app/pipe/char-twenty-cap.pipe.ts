import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'charTwentyCap'
})
export class CharTwentyCapPipe implements PipeTransform {

  transform(value: string | any): string {    
    if (typeof(value) === "string") {
      if (value.length > 20) return value.substring(0,20);
      else return value;
    }
    else {
      if (value.value === undefined) return "";
      return this.transform(value.value);
    }
  }

}
