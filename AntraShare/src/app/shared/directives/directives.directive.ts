import { Directive } from '@angular/core';
import { HostBinding,HostListener } from '@angular/core';


@Directive({
  selector: '[appDirectives]'
})
export class DirectivesDirective {

  constructor() { }
  @HostBinding('style.display') display?:string;
  @HostListener('window:load',['$event']) Change(event:Event){
    this.display='block';
    setTimeout(()=>{
      this.display='none'
    },5000)
  }

}
