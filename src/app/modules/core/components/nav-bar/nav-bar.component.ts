import { Component } from '@angular/core';
import { AuthenticationService } from 'app/modules/shared/services/authentication.service';

@Component({
  selector: 'pro-nav-bar',
  templateUrl: './nav-bar.component.html'
})
export class NavBarComponent {

  constructor(private authService: AuthenticationService) { }

  public logout(): void {
    this.authService.logout();
  }
}
