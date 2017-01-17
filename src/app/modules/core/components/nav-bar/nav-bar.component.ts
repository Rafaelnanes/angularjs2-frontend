import { Component } from '@angular/core';
import { AuthenticationService } from './../../../shared/index';

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
