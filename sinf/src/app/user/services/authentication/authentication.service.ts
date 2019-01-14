import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private username: string;

  private password: string;

  private authenticated: boolean = localStorage.getItem('primaveraToken') !== null;

  constructor(private router: Router) { }

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
      () => {
        this.authenticated = true;
        this.router.navigateByUrl('');
      }
    );
  }

  logout() {
    this.authenticated = false;
    localStorage.removeItem('primaveraToken');
    this.router.navigateByUrl('login');
  }
}
