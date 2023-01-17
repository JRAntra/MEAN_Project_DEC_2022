import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  constructor(private http: HttpClient) { }

  user = {name:"JR"}

  userList :any =[]

  subscription : Subscription = new Subscription()

  getUserInfo(){
    this.http.get('url').subscribe(
      (res)=> {
        this.userList = res
      }
      // (error)=>console.log(error),
      // ()=> alert("data has been transferred")
    )

    // this.subscription = this.http.get('url').subscribe()  
    // this.subscription.unsubscribe()
  }
  //promise, latest 10 video from a youtuber --- lateset 10 at this moment
  //Observable.subscribe(

//do everything here

  //)

  // observable.subscribe()
}
