import { Component, OnInit } from '@angular/core';
import { User } from '../../../shared/models/users.model';
import { GetAllUsersService } from '../services/get-all-users.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {
  users: User[] = [];
  errorMessage: string = '';
  user: undefined | User;

  constructor(private userService: GetAllUsersService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(
     (response) => {
        console.log("Response received.")
        this.users = response;
        console.log(this.users)
      }
    );
  }

  getProfile(username: string): void{
    this.user = this.users.find(user => user.userName === username);
  }

}
