import { Component, OnInit } from '@angular/core';
import { Router, UrlSerializer } from '@angular/router';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  indicator: boolean = false;
  textIndicator: string = "first"
  dataArray = [
  {name:'JR', age:30},
  {name:'David', age:40},
  {name:'Tom', age:31},
  {name:'Mary', age:28}]
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  goToLoginPage() {
    this.router.navigate(['login'])
  }
}
