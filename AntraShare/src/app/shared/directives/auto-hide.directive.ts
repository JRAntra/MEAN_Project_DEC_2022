import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAutoHide]'
})
export class AutoHideDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }
  
  ngOnInit() {
    setTimeout(() => {
      this.renderer.setStyle(this.el.nativeElement, 'display', 'none');
    }, 5000)  
  }
}
