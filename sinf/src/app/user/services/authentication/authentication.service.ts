import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private username: string;

  private password: string;

  private authenticated: boolean = false;

  constructor() { }

  setCredentials(username: string, password: string) {
    this.username = username;
    this.password = password;
  }

  getUsername(): string {
    return this.username;
  }

  getPassword(): string {
    return this.password;
  }

  isAuthenticated() {
    return this.authenticated;
  }

  /**
   * Need to pass login action as a parameter because of circular dependency injections
   */
  login(loginAction: Observable<Object>) {
    loginAction.subscribe(
      () => this.authenticated = true,
      () => console.log("Failed to login") // TODO change to error Notification
    );
  }
}
