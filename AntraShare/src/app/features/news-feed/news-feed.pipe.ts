import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'newsFeed'
})
export class NewsFeedPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return value.substring(0,10);
  }

}
