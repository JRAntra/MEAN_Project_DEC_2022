import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAutoHide]'
})
export class AutoHideDirective {

  // The host element will disappear after 5 seconds after the component has been initialized

  constructor(private elRef: ElementRef) { 
    setTimeout(() => {
      this.elRef.nativeElement.style.visibility = 'hidden';
    }, 5000);
  }

}
