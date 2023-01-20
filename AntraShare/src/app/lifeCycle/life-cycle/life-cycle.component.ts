import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.scss']
})
export class LifeCycleComponent implements OnChanges,OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
@Input() color : string = 'black'
  constructor() { 
    this.getUserInfo()
    //hooks 
    // initialization ------------------------------------------> destroy
    //  hook1                 hook2     hook3                      hook4

    // ngOnChanges                              //ngOnchanges ====> @input (optional)
    // ngOninit                                 //ngDoCheck ==> will always been trigger
    // ngDocheck                                //ngAfterContentChecked
    // ngAfterContentInit                       //ngAfterViewChecked
    // ngAfterContentChecked
    // ngAfterViewInit 
    // ngAfterViewChecked 

    //onchanges, init, doCheck, contentinit, contentchecked, viewinit, viewCheck

    // ngOnDestroy
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('this is ngOnchanges')
  }
  
    ngOnInit(): void {
      console.log('this is ngOnInit')
    }
  ngDoCheck(): void {
    console.log('this is DoCheck')
  }
  ngAfterContentInit(): void {
    console.log('this is ngAfterContentInit')
  }
  ngAfterContentChecked(): void {
    console.log('this is ngAfterContentChecked')
  }
  ngAfterViewInit(): void {
    console.log('this is ngAfterViewInit')
  }
  ngAfterViewChecked(): void {
    console.log('this is ngAfterViewchecked')
  }
  ngOnDestroy(): void {
    console.log('this is ngOnDestroy')
  }




  

  getUserInfo(){

  }


}
