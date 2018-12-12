import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reservation } from '../_models/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  baseUrl = environment.apiUrl + 'users/';

constructor(private http: HttpClient) { }

getUserReservations(id): Observable<Reservation[]> {
  return this.http.get<Reservation[]>(this.baseUrl + id + '/reservations');
}

getReservationsList(): Observable<Reservation[]> {
  return this.http.get<Reservation[]>(this.baseUrl + 1 + '/reservations/all');
}

getReservation(id, idReservation): Observable<Reservation[]> {
  return this.http.get<Reservation[]>(this.baseUrl + id + '/reservations/' + idReservation);
}

addReservation(id, visit) {
  return this.http.post(this.baseUrl + id + '/reservations', visit);
}

}



