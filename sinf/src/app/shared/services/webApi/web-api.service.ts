import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tap, retry } from 'rxjs/operators';
import { isNull } from 'util';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/user/services/authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class webApiService {

  constructor(private http: HttpClient, private auth: AuthenticationService) { }

  /**
   * GET request to the WebApi
   */
  get(endpoint: string) : Observable<Object> {
    return this.http.get(
      `${environment.webApi}/${endpoint}`,
      {
        headers: new HttpHeaders({
          Authorization: this.getToken()
        })
      }
    );
  }

  /**
   * POST request t the WebApi
   */
  post(endpoint: string, body: any) : Observable<Object> {
    return this.http.post(
      `${environment.webApi}/${endpoint}`,
      body,
      {
        headers: new HttpHeaders({
          Authorization: this.getToken(),
          'Content-Type': 'application/json'
        })
      }
    );
  }

  /**
   * Fetch the Authentication Token from the WebApi and save it
   */
  fetchToken() : Observable<Object> {
    return this.http.post(
      `${environment.webApi}/token`,
      `username=${this.auth.getUsername()}&
      password=${this.auth.getPassword()}&
      company=${environment.company}&
      grant_type=${environment.grant_type}&
      instance=${environment.instance}&
      line=${environment.line}`,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded'
        })
      }
    ).pipe(retry(2),tap(
      (response: any) => this.setToken(response.access_token)
    ));
  }

  /**
   * Methods to handle Primavera Token
   */

  private getToken(): string {
    let token: string = localStorage.getItem('primaveraToken');

    return isNull(token) ? '' : token;
  }

  private setToken(value: string): void {
    localStorage.setItem('primaveraToken', `Bearer ${value}`);
  }
}
