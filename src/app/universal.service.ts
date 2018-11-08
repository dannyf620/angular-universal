import { baseURL } from './shared/baseurl';


import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UniversalService {

  constructor(private http: HttpClient) { }
  getUniversal(endpoint: string, params?: any): Observable<any> {
    return this.http.get<any>(baseURL + endpoint, { params: params });
  }
}
