import { Directive } from '@angular/core';

@Directive({
  selector: '[appHideAfterFiveSec]'
})
export class HideAfterFiveSecDirective {

  constructor() { }

}
