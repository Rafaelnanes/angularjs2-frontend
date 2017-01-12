import { Component, Input } from '@angular/core';
import { User } from 'app/modules/shared/models/user';
import { AuthenticationService } from 'app/modules/shared/services/authentication.service';

@Component({
  selector: 'pro-login',
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
