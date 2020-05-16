import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import {Planet} from "../model/planet";
import {shareReplay} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PlanetService {
  private varName$: Observable<any>;
  // private baseUrl = 'http://localhost:8080/springboot-crud-rest/api/v1/planets';

  private baseUrl = 'https://angular6.herokuapp.com/springboot-crud-rest/api/v1/planets';
  constructor(private http: HttpClient) { }

  private _getPlanetsList(): Observable<any> {
      return this.http.get(`${this.baseUrl}`);
  }

  getPlanetsList(): Observable<any> {
    if(!this.varName$){
    return this.varName$ = this._getPlanetsList().pipe(shareReplay(1)) }
    return this.varName$
  }

  getPlanet(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }


}
