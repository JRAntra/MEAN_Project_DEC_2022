
export class userClass {
    constructor() {
    }

    username: string = ""

    getUsername = () => {

    }
}

export class userToken {
    userRole: string = "normal user"
}

export interface User {
    username: string;
    age: number;
    getUsername: Function
}

export class userC implements User {
    username = "JR"
    age = 30
    getUsername = () => {
        console.log(this.username)
    }
}

export abstract class userAbstract {

    username: string = "JR"

    abstract age: number
}
export class test extends userAbstract {
    override username = "David"
    age = 30
}

export class userD implements User {
    username = "JR";
    age = 30;
    getUsername() {
        console.log("")
    }
}

export interface UserInterface {
    job: string
}
export class userE implements User, UserInterface {
    username = "JR";
    age = 30;
    getUsername() {
        console.log("")
    }
    job = "web developer"
}


export enum gender{
    male = 10,
    female = 11,
    other = 20,
}

export type role = string

export type userRole = "user" | "admin" | "superUser"