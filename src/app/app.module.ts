import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//Modules 
import { CoreModule } from './modules/core/core.module';
import { SharedModule } from './modules/shared/shared.module';

//services
import { AuthGuardService } from './modules/shared/services/auth-guard.service';
import { AuthService } from './modules/shared/services/auth.service';

//Components - Core
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CoreModule,
    SharedModule
  ],
  providers: [
    AuthGuardService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
