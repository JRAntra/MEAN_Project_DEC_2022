import { Component, OnInit } from '@angular/core';
import { Router, UrlSerializer } from '@angular/router';
import { UserInfoService } from 'src/app/services/user-info.service';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  redIndicator: boolean = true;
  blueIndicator: boolean = false;
  greenIndicator: boolean = false;
  color: string = 'black';

  time : Date = new Date();

  longtextObj = {
    content: "abcdefghijklmn",
    id: 1
  }

  indicator: boolean = false;
  textIndicator: string = "first"
  dataArray = [
    { name: 'JR', age: 30 },
    { name: 'David', age: 40 },
    { name: 'Tom', age: 31 },
    { name: 'Mary', age: 28 }]

  constructor(private router: Router,
    private userService : UserInfoService) { }

  ngOnInit(): void {
    this.userService.user = {name:'David'}
  }


  goToLoginPage() {
    this.router.navigate(['login'])
  }
  changeColor(color: string) {
    switch (color) {
      case 'red':
        this.redIndicator = true;
        this.blueIndicator = false;
        this.greenIndicator = false;
        this.color = 'red';
        break;
      case 'blue':
        this.redIndicator = false;
        this.blueIndicator = true;
        this.greenIndicator = false;
        this.color = 'blue';

        break;
      case 'green':
        this.redIndicator = false;
        this.blueIndicator = false;
        this.greenIndicator = true;
        this.color = 'green';

        break;

      default:
        break;
    }
  }
}
