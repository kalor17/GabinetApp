import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Visit } from '../_models/Visit';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VisitService {
  baseUrl = environment.apiUrl + 'users/';

constructor(private http: HttpClient) { }

getVisits(id): Observable<Visit[]> {
  return this.http.get<Visit[]>(this.baseUrl + id + '/visits');
}

getVisit(id, idVisit): Observable<Visit[]> {
  return this.http.get<Visit[]>(this.baseUrl + id + '/visits/' + idVisit);
}

addVisit(id: number, visit: Visit) {
  return this.http.post(this.baseUrl + id + '/visits', visit);
}

}
