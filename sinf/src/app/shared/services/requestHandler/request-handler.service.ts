import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError, retry, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RequestHandlerService {

  constructor(private http: HttpClient) { }

  getRequest(endpoint: string, body: object) {
    this.http.get(
      `${environment.api}/${endpoint}`,

    )
  }

  requestToken() {
    this.http.post(
      `${environment.api}/token`,
        `username=${environment.username}&
        password=${environment.password}&
        company=${environment.company}&
        grant_type=${environment.grant_type}&
        instance=${environment.instance}&
        line=${environment.line}`,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded'
        })
      }
    ).subscribe();
  }

  /**
   * Methods to handle primavera Token
   */

  private getToken() {
    localStorage.getItem('primaveraToken');
  }

  private setToken(value: string) {
    localStorage.setItem('primaveraToken', value);
  }
}
