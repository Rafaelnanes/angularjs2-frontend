import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppErrorFormComponent } from './components/app-error-form/app-error-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  declarations: [
    AppErrorFormComponent
  ],
  providers: [
  ],
  exports: [
    FormsModule,
    RouterModule,
    CommonModule,
    AppErrorFormComponent
  ]
})
export class SharedModule {

}
