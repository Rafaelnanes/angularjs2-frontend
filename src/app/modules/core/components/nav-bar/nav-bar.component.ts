import { Component } from '@angular/core';
import { AuthenticationService, AppSettings, GlobalService } from 'app/modules/shared/index';

@Component({
  selector: 'pro-nav-bar',
  templateUrl: './nav-bar.component.html'
})
export class NavBarComponent {

  public currentUser: string;
  public isUserLogged: boolean;

  constructor(private authService: AuthenticationService, public global: GlobalService) {
    
  }

  public logout(): void {
    this.authService.logout();
  }
}
