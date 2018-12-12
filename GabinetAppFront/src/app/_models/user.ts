import { Visit } from './visit';
import { Reservation } from './reservation';

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
    reservations?: Reservation[];
}
