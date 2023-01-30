export class LoginUser {
  userEmail: string;
  password: string;
  constructor(email: string, password: string) {
    this.userEmail = email;
    this.password = password;
  }
}

export type UserProfile = {
  name: string;
  userName: string;
  userEmail: string;
  userRole: string;
  age: number;
  gender: string;
  phone: number;
  bearerToken: string;
};
