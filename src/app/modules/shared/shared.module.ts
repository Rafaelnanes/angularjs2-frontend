import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppErrorFormComponent } from './components/index';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { NglModule } from 'ng-lightning/ng-lightning';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ToastModule.forRoot(),
    NglModule.forRoot()
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
    NglModule,
    AppErrorFormComponent
  ]
})
export class SharedModule {

}
