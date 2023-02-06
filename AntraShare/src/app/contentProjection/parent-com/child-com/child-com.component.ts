import { Component, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-child-com',
  templateUrl: './child-com.component.html',
  styleUrls: ['./child-com.component.scss']
})
export class ChildComComponent {
  constant  = 1
  @ContentChild('middle') ele?: ElementRef
  ngAfterContentChecked(): void {
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
    console.log(this.ele)
  }
}
