import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent } from '@angular/common/http';
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
      {
        username: environment.username,
        password: environment.password,
        company: environment.company,
        instance: environment.instance,
        grant_type: environment.grant_type,
        line: environment.line
      },
      null // Verify if header can be null
    ).pipe(
      tap(
        null, // To Do, need to check Postman answer first
        null // Retry 3 times (?)
      )
    );
  }

  // Methods to handle primavera Token

  private getToken() {
    localStorage.getItem('primaveraToken');
  }

  private setToken(value: string) {
    localStorage.setItem('primaveraToken', value);
  }
}
