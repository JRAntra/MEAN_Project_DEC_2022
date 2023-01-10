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

  ngOnInit(): void {
    // console.log(this.text)
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
    
}
