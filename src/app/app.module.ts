import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BodyComponent } from './template/body/body.component';
import { NavBarComponent } from './template/nav-bar/nav-bar.component';
import { AppContentComponent } from './template/app-content/app-content.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    NavBarComponent,
    AppContentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
