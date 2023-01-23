export class User{
    userId: string;
    userName: string;
    userEmail: string;
    password: string;
    userRole: string;
    name: string | null;
    age: number | null;
    phone: number | null;
    gender: string | null;

    constructor(userId: string, userName: string, userEmail: string, 
        password: string, userRole: string, name?: string, age?: number, gender?: string,
        phone?: number) {
            this.userId = userId;
            this.userName = userName;
            this.userEmail = userEmail;
            this.password = password;
            this.userRole = userRole;
            this.name = name ? name : null;
            this.age = age ? age : null;
            this.phone = phone ? phone : null;
            this.gender = gender ? gender : null;
        }
}