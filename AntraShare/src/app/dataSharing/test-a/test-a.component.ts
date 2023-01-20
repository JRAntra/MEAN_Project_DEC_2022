import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { debounceTime, fromEvent, map, of, switchMap } from 'rxjs';
import { DataSharingService } from '../data-sharing.service';


export class userClass {
  age: number;
  constructor() {
    this.age = 30;
  }
  username: string = 'JR';


}


@Component({
  selector: 'app-test-a',
  templateUrl: './test-a.component.html',
  styleUrls: ['./test-a.component.scss']
})
export class TestAComponent implements OnInit {


  constructor(private dataSharing: DataSharingService) { }

  ngOnInit(): void {

    //Observable or Subject: "JR", "David"

    // this.dataSharing.sharedData.subscribe(res=> console.log(res))
    // this.dataSharing.sharedData.next("david")
    // this.dataSharing.sharedData.next("Patrick")

    // this.dataSharing.sharedDataBehavior.next("JR ")
    // this.dataSharing.sharedDataBehavior.next("david ")
    // this.dataSharing.sharedDataBehavior.subscribe(res => console.log(res))
    // this.dataSharing.sharedDataBehavior.next("Patrick")


    // this.dataSharing.shareDataReplay.next("JR ")
    // this.dataSharing.shareDataReplay.next("david ")
    // this.dataSharing.shareDataReplay.next("Brandon")
    // this.dataSharing.shareDataReplay.subscribe(res => console.log(res + "these are the previous values"))
    // this.dataSharing.shareDataReplay.next("Patrick")

    // let user = new userClass()
    // console.log(user)
    this.dataSharing.sharedData.pipe(
      debounceTime(1000),
      map(res => res),
      switchMap(res=>res),
    )

    fromEvent(window, "click")
    of(1,2,3,4).subscribe(res=> console.log("this is " + res))
    

  }

  updateValue(ele: HTMLInputElement) {
    console.log(ele.value)
    this.dataSharing.sharedData.next(ele.value)
  }

}


