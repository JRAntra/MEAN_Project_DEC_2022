import { Directive, ElementRef, HostBinding } from '@angular/core';

@Directive({
  selector: '[appAutoHideAfterFive]'
})
export class AutoHideAfterFiveDirective {

  
  constructor(private el: ElementRef) {  }

  ngOnInit() {
    setTimeout(() => {
      this.el.nativeElement.style.display = "none";
      console.log("element is hidden");
      
    }, 5000);
  }

}
