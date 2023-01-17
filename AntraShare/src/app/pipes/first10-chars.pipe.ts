import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'first10Chars'
})
export class First10CharsPipe implements PipeTransform {

  // spread operator vs rest parameter
  transform(value: string | any): string {
    if(typeof(value) === 'string'){
      if(value.length > 10){
        return value.substring(0,10)
      }else{
        return value
      }
    }
    else{
      const content = value.content
      if(content.length > 10){
        return content.substring(0,10)
      }else{
        return content
      }
    }



    
  }

}
