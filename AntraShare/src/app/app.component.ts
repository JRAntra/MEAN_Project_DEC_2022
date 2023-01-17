import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  
  title = 'AntraShare';
  sentence!: string;
  onStringChange(value:string) {
    this.sentence = value;
  }


}
