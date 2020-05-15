import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlanetService {

  private baseUrl = 'http://localhost:8080/springboot-crud-rest/api/v1/planets';
  private baseUrl1 = 'http://localhost:8080/springboot-crud-rest/api/v1/planets?limit=10';

  constructor(private http: HttpClient) { }

  getPlanet(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  getPlanetsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
