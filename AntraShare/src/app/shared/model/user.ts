export interface Role {
    canAccess: boolean;
}

export interface User {
    name: string | null | undefined;
    userRole: string
    userName: string;
    userEmail: string;
    password: string;
}

export interface UserAccount {
    userName: string;
    // userEmail: string,
    _userRole?:string,
    password: string
}
