import { Component, ViewContainerRef } from '@angular/core';
import { User, AuthenticationService } from 'app/modules/shared/index';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent {

  public user: User = new User("adm", "adm");

  constructor(
    private authService: AuthenticationService,
    public toastr: ToastsManager,
    public vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  public onSubmit(): void {
    this.authService.login(this.user.login, this.user.password).catch(response => {
      if(response.status == 401){
        this.toastr.error("Login or password invalid.");
      }else{
        this.toastr.error("Error please contact support");
      }
    });
  }

}
