import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  declarations: [

  ],
  providers: [
  ],
  exports: [
    FormsModule,
    RouterModule,
    CommonModule
  ]
})
export class SharedModule {
  
}