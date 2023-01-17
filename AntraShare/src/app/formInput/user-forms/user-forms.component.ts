import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { from, fromEvent, of, Subscription } from 'rxjs';

@Component({
  selector: 'app-user-forms',
  templateUrl: './user-forms.component.html',
  styleUrls: ['./user-forms.component.scss']
})
export class UserFormsComponent implements OnInit {


  constructor() { }

  username: FormControl = new FormControl('')

  n:number  = 0

  subscriptions : Subscription[] = []

  ngOnInit(): void {
    this.subscriptions.push(this.username.valueChanges.subscribe(
      res=> console.log("Async value :" +res)
    ))
    // console.log("sync value :" + this.username.value)

    this.subscriptions.push(fromEvent(window,'click').subscribe(
      res=> {
        this.n ++;
        console.log("window has been clicked " + this.n + " times")
      }
    ))
  }

  unsubscribeLocalObservable() {
    this.subscriptions.forEach(element => {
      element.unsubscribe()
    });
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscriptions.forEach(element => {
      element.unsubscribe()
    });
    
  }

}
