import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AuthService } from './services/auth.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  declarations: [

  ],
  providers: [
    AuthService
  ],
  exports: [
    FormsModule,
    RouterModule,
    CommonModule
  ]
})
export class SharedModule {
  
}
