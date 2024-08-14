import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpHelperService {

  constructor(private http: HttpClient) { }

  get(endpoint): Observable<any> {
    return this.http.get(environment.apiURL + endpoint, {observe: 'response'});
  }

  post(endpoint, payload): Observable<any> {
    return this.http.post(environment.apiURL + endpoint, payload, {observe: 'response'});
  }

  put(endpoint, payload): Observable<any> {
    return this.http.put(environment.apiURL + endpoint, payload, {observe: 'response'});
  }
  
  delete(endpoint): Observable<any> {
    return this.http.delete(environment.apiURL + endpoint, {observe: 'response'});
  }
}
