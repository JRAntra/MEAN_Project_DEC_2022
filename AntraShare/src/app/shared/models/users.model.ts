export interface User{
    userId: string;
    userName: string;
    userEmail: string;
    password: string;
    userRole: userRole;
    name: string | null;
    age: number | null;
    phone: number | null;
    gender: string | null;

}
// use gender as enum, assign limited choices of this field
// works like a dictionary
export enum gender {
    male,
    female,
    other
}

export type userRole = {
    admin: 'admin',
    user: 'user'
}