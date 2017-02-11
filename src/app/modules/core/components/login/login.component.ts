import { Component, ViewContainerRef } from '@angular/core';
import { User, AuthenticationService } from 'app/modules/shared/index';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent {

  public user: User = new User("adm", "adm");

  constructor(
    private authService: AuthenticationService,
    public toastr: ToastsManager,
    public vcr: ViewContainerRef,
    private router: Router) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  public onSubmit(): void {
    this.authService.login(this.user).then(response => {
      this.router.navigate(['/main']);
    }).catch(response => {
      if (response.status == 401) {
        this.toastr.error("Login or password invalid.");
      } else {
        this.toastr.error("Error please contact support");
      }
    });
  }

}
