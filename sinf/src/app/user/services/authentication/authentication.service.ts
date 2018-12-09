import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private username: string;

  private password: string;

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
}
