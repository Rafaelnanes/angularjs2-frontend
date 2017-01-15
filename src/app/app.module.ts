import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, BaseRequestOptions } from '@angular/http';

//Modules 
import { CoreModule } from './modules/core/core.module';
import { SharedModule } from './modules/shared/shared.module';

//services
import { AuthGuardService } from './modules/shared/services/auth-guard.service';

//Components - Core
import { AppComponent } from './app.component';

//Directives

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    CoreModule,
    SharedModule
  ],
  providers: [
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
