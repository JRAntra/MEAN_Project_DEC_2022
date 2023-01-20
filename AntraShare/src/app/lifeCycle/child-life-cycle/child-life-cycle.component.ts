import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-child-life-cycle',
  templateUrl: './child-life-cycle.component.html',
  styleUrls: ['./child-life-cycle.component.scss']
})
export class ChildLifeCycleComponent implements OnInit, OnChanges,DoCheck,
AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy {

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('this is child ngOnchanges')
  }
  
    ngOnInit(): void {
      console.log('this is child ngOnInit')
    }
  ngDoCheck(): void {
    console.log('this is child DoCheck')
  }
  ngAfterContentInit(): void {
    console.log('this is child ngAfterContentInit')
  }
  ngAfterContentChecked(): void {
    console.log('this is child ngAfterContentChecked')
  }
  ngAfterViewInit(): void {
    console.log('this is child ngAfterViewInit')
  }
  ngAfterViewChecked(): void {
    console.log('this is child ngAfterViewchecked')
  }
  ngOnDestroy(): void {
    console.log('this is child ngOnDestroy')
  }





}
