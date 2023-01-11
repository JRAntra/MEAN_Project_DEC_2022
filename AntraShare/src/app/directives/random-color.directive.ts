import { Directive } from '@angular/core';

@Directive({
  selector: '[appRandomColor]'
})
export class RandomColorDirective {

  constructor() { }

  changeColor(){
    //change the color to blue
  }

  //Structual ===> ngIf="boolean", ngFor="let i of array", ngSwtich(swtichcase)
  //Attribute ===> Apply extra attributes to the host 
  //Component

}
