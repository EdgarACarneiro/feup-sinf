import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication/authentication.service';
import { webApiService } from 'src/app/shared/services/webApi/web-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private loginForm = new FormGroup({
    username: new FormControl('', [
      Validators.required
    ]),
    password: new FormControl('', [
      Validators.required
    ])
  });

  constructor(private auth: AuthenticationService, private webapi: webApiService) { }

  ngOnInit() {
  }

  onSubmit() {
    const { username, password} = this.loginForm.value;

    this.auth.setCredentials(username, password);
    this.auth.login(this.webapi.fetchToken());
  }

}
