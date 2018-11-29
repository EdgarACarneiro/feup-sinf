import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tap, retry } from 'rxjs/operators';
import { isNull } from 'util';

@Injectable({
  providedIn: 'root'
})
export class RequestHandlerService {

  constructor(private http: HttpClient) { }

  private teste(endpoint: string) {
    return this.http.get(
      `${environment.api}/${endpoint}`,
      {
        headers: new HttpHeaders({
          Authorization: this.getToken()
        })
      }
    );
  }

  getRequest(endpoint: string) {
    return this.teste(endpoint).pipe(
      tap(
        null,
        () => {
          this.requestToken().
            pipe(tap(retry(2))).
            subscribe(
              () => this.teste(endpoint).subscribe(
                (response) => console.log(response)
              )
            )
        }
      )
    ).subscribe();
  }

  requestToken() {
    return this.http.post(
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
    ).pipe(tap(
      (response: any) => this.setToken(response.access_token)
    ));
  }

  /**
   * Methods to handle primavera Token
   */

  private getToken(): string {
    let token: string = localStorage.getItem('primaveraToken');

    return isNull(token) ? '' : token;
  }

  private setToken(value: string): void {
    localStorage.setItem('primaveraToken', `Bearer ${value}`);
  }
}
