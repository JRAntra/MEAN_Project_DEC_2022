import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'AntraShare';
  text = "this is a demo for data Bindings"
  textContent = "lastname"
  styleVar = ""
  parentColor = "red"


  // Pre-fetch --- (do something here such as fetch data from server) before you navigate to the next page
  // Lazy-loading --- downloading the source file only if the module is going to be used
  // Pre-loading --- It is always used with Lazy-Loading, after finish downloading the core(needed) features
  // start downloading source files for the other modules
  
  //login page is the first page
  // default: downloading everything before the login page is created
  // lazy-loading:  only downloading the login module , then create login page
  // pre-loading: only downloading the login module before login page is created, then download other
  // source file

  // pre-fetch, resolver


  ngOnInit(): void {
  }

  onClickRed(): string{
   
    return "" 
  }

  onClickButton():void{
    alert("button clicked")
  }

  onChangeInputText(): void {
    alert("text changed")
    FormControl
  }

  changeColor(){
    this.parentColor = 'blue';
  }
    
}
