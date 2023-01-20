import { Component, OnInit } from '@angular/core';
import { pipe, map } from 'rxjs';
import { first } from 'rxjs-compat/operator/first';
import { UserInfoService } from 'src/app/shared/services/user-info.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {

  users:any = [];

  constructor(private userService:UserInfoService) { }

  ngOnInit(): void {
    this.userService.getAll()
      .pipe()
      .subscribe(users => {
        console.log(users)
        this.users = users
        })
        
    };
}
