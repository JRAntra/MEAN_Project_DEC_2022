import { Component } from '@angular/core';
import { User } from './models/Users';
import { RetrieveUserInfoService } from './services/retrieve-user-info.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent {
  users: [User] = [new User("1", "Sam Liao", "SamLiao", "sam@gmail.com", "sam123", "role", 20, "male", 123456789)]
  displayUser = this.users[0]

  constructor(private userService: RetrieveUserInfoService) {}

  ngOnInit() {
    console.log("init");
    this.userService.getUsersInfo().subscribe(
      res => {
        let u = res as Array<User>
        u.forEach(user => this.users.push(new User(user._id, user.name, user.userName, user.userEmail, user.password, user.userRole, user.age, user.gender, user.phone)));
        console.log(this.users);
        this.users.shift()
        this.displayUser = this.users[0]
        
      }
      
    )
  }

  clickUser(event:Event) {
    console.log((event.target as HTMLLIElement).id);
    let id = (event.target as HTMLLIElement).id
    this.displayUser = this.users.filter(user => user._id == id)[0]
  }
}
