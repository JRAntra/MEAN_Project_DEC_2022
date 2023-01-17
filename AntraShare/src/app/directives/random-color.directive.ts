import { style } from '@angular/animations';
import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appRandomColor]'
})
export class RandomColorDirective {

  constructor() { }
  @HostBinding('style.opacity') localOpacity ? : string
  @HostBinding('style.size') size ? : string = '16px'

  @HostListener('mousemove',['$event'])
  changeColor(event:MouseEvent){
    //change the color dynamically while mouse is moving
    let x = event.clientX;
    let y = event.clientY;
    this.localOpacity = ((x+y)/1000).toString()
    this.size = ((x+y)/50).toString() + 'px'
    
  }
  // onClick()

  ngOnInit(): void {
    // if(this.localColor){
    //   this.localColor = 'yellow'
    // }else{
    //   this.localColor = 'red'
    // }
    
  }



  //Structual ===> ngIf="boolean", ngFor="let i of array", ngSwtich(swtichcase)
  //Attribute ===> Apply extra attributes to the host 
  //ngClass ngStyle
  //Component

}
