import { Component, Input } from '@angular/core';
import { User, AuthenticationService } from './../../../shared/index';

@Component({
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent {

  public user: User = new User("admin", "password");

  constructor(private authService: AuthenticationService) {
  }

  public onSubmit(): void {
    this.authService.login(this.user.login, this.user.password);
  }

}
