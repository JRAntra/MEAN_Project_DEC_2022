export class User{
    userId: string;
    userName: string;
    email: string;
    password: string;
    userRole: string;
    name: string | null;
    age: number | null;
    phone: number | null;

    constructor(userId: string, userName: string, email: string, 
        password: string, userRole: string, name?: string, age?: number, gender?: string,
        phone?: number) {
            this.userId = userId;
            this.userName = userName;
            this.email = email;
            this.password = password;
            this.userRole = userRole;
            this.name = name ? name : null;
            this.age = age ? age : null;
            this.phone = phone ? phone : null;
        }
}