import { Directive, HostBinding, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appDisappear]'
})
export class DisappearDirective implements OnInit {

  constructor() { }
  @HostBinding('hidden') isHidden = false;
  // @HostListener

  seconds = 5;
  intervalId: any;

  ngOnInit(): void {
    //this.disappearFiveSecond();
    this.intervalId = setInterval(() => {
      if (this.seconds > 0) {
        this.seconds --;
      } else {
        this.isHidden = true;
        clearInterval(this.intervalId)
      }
    }, 1000)
  }


}
