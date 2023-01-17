import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHide]'
})
export class HideDirective {

  constructor(private element: ElementRef) {
    setTimeout(() => {
      this.element.nativeElement.style.visibility = 'hidden';
    }, 5000)
   }

}
