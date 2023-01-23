import { Directive, ElementRef, Renderer2 } from '@angular/core';
import { HostBinding,HostListener } from '@angular/core';

@Directive({
  selector: '[appLikeList]'
})
export class LikeListDirective {
  flag:boolean=false

  constructor(private el: ElementRef,private renderer:Renderer2) { }
  //@HostBinding('style.display') display:string='block';
  @HostListener('click',['$event'])onclick(event:Event){
    if ((event.target as Element).className=="like-list-button"){
      let content=this.el.nativeElement.querySelector('.like-list-content');
      if(!this.flag){
        this.renderer.setStyle(content,'display','block')
        this.flag=true

      }
      else{
        this.renderer.setStyle(content,'display','none')
        this.flag=false;
      }

    }

  }



}
