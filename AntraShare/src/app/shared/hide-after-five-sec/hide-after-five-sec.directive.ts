// Change the DOM directly

// import { Directive, ElementRef } from '@angular/core';

// @Directive({
//   selector: '[appHideAfterFiveSec]'
// })
// export class HideAfterFiveSecDirective {

//   constructor(private elementRef: ElementRef) {
//   }

//   ngOnInit(){
//     setTimeout(()=>{
//       this.elementRef.nativeElement.style.display = "none"
//     },5000)
//   }
// }

import { Directive, ElementRef, Renderer2 } from '@angular/core';

// allows to manipulate elements of app without having to touch the DOM directly.
@Directive({
  selector: '[appHideAfterFiveSec]'
})
export class HideAfterFiveSecDirective {

  constructor(private elRef: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
    setTimeout(() => {
      this.renderer.setStyle(this.elRef.nativeElement, 'display', 'none')
    }, 5000)
  }
}
