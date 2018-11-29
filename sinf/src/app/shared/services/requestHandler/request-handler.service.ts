import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tap, retryWhen, take, delay } from 'rxjs/operators';
import { isNull } from 'util';

@Injectable({
  providedIn: 'root'
})
export class RequestHandlerService {

  constructor(private http: HttpClient) { }

  getRequest(endpoint: string, body: object) {
    this.http.get(
      `${environment.api}/${endpoint}`,
      {
        headers: new HttpHeaders({
          Authorization: this.getToken()
        })
      }
    ).pipe(
      retryWhen(errors => { // Alterar isto para sem RetryWhen e om Error, depoletar novamente o pedido atualizado 
        return errors.pipe(
          tap(
            (err: any) => {
              if (err.status === 500) { // Request Token
                this.requestToken();
              }
            }
          ),
          delay(1000),
          take(3));
      })
    ).subscribe();
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
    ).subscribe(
      (response: any) => this.setToken(response.access_token)
    );
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
