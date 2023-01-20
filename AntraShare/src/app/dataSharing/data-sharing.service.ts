import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {

  constructor() { }

  sharedData : Subject<any> = new Subject<any>()
  sharedDataBehavior: BehaviorSubject<any> = new BehaviorSubject<any>("JR")
  shareDataReplay: ReplaySubject<any> = new ReplaySubject<any>(4)

  pushNewValue(){
    this.sharedData.next('I am the new data');
    this.sharedData.error('this is the error message');
    this.sharedData.complete();
    // this.sharedData.unsubscribe()
  }

  // Observable  : a - b - c - d - e - .......
  // Subject:
  //                         |subscribe

  // replaySubject: 

  // Behavior Subject => it will emit the latest emitted value from the previous timeline
  // Replay Subject => it will emit the latest n emitted values from the previous timeline


  createBehaviorSubject(){
    this.sharedDataBehavior.subscribe(res=> console.log(res))
  }


}
