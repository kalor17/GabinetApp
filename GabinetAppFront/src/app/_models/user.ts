import { Visit } from './visit';

export interface User {
    id: number;
    username: string;
    name: string;
    surname: string;
    dateOfBirth: Date;
    lastVisit: Date;
    address: string;
    gender: string;
    role: string;
    visits?: Visit[];
}
