import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'characterLimitPipe'
})
export class CharacterLimitPipePipe implements PipeTransform {

  transform(input: string): string {
    if (input.length <= 20) return input;
    else return input.slice(0,20)+"...";
  }

}
