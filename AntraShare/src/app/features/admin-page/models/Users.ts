export class User {
    _id : number
    name : string
    userName: string
    userEmail: string
    password: string
    userRole: string
    age: number
    gender: string
    phone: number

    constructor(id:number, name:string, userName: string, userEmail: string, password: string, userRole: string, age: number, gender: string, phone: number) {
        this._id = id;
        this.name = name;
        this.userName= userName;
        this.userEmail= userEmail;
        this.password= password;
        this.userRole= userRole;
        this.age= age,
        this.gender= gender;
        this.phone= phone;
    }
}