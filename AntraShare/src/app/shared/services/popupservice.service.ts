import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PopupserviceService {
  private popUpServiceState=new BehaviorSubject('')
  currentPopUpService=this.popUpServiceState.asObservable()
  


  constructor() { }
  upDateState(val:string){
    this.popUpServiceState.next(val)
  }
}
