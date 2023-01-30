export class LoginUser {
  userEmail: string;
  password: string;
  constructor(email: string, password: string) {
    this.userEmail = email;
    this.password = password;
  }
}
