import { ThisReceiver } from '@angular/compiler';
import { AfterViewChecked, Component, ContentChild, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { delay, of } from 'rxjs';
import { ChildComComponent } from './child-com/child-com.component';

@Component({
  selector: 'app-parent-com',
  templateUrl: './parent-com.component.html',
  styleUrls: ['./parent-com.component.scss']
})
export class ParentComComponent implements OnInit, AfterViewChecked {


  @ViewChild('userInput', {static: false}) childEle!: ElementRef
  @ViewChildren("userInput") pTags?: QueryList<any>
  @ContentChild('middle', {static: false}) childEle2!: ElementRef

  //ngOnchanges 
  //ngOnint
  //ngDocheck
  //ngAFTERVIEWINIT
  //ngAfterviewChecked
  //ngAftercontentChecked

  datasource: any
  shouldDisplay = true;
  ngOnInit(): void {
    of([{ name: "JR" }, { name: "David" }]).pipe(delay(1000)).subscribe(
      res => this.datasource = res
    )
    // console.log(this.childEle)

  }

  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    // console.log(this.childEle)

  }

  ngAfterViewChecked(): void {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    // console.log(this.childEle)
    
    this.childEle.nativeElement.append("<div>userInput</div>")

    "<script>alert(userInfo)</script>"
    

  }

  ngAfterContentChecked(): void {
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
    console.log(this.childEle2)

  }

  sendValue() {
    console.log(this.pTags);
    

    this.shouldDisplay = false;
  }

}
