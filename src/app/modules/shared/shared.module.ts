import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppErrorFormComponent } from './components/index';
import { ToastModule } from 'ng2-toastr/ng2-toastr';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ToastModule.forRoot()
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
