import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppErrorFormComponent } from './components/index';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { NglModule } from 'ng-lightning/ng-lightning';
import { TextMaskModule } from 'angular2-text-mask';
import { CurrencyMaskModule } from "ng2-currency-mask";
import { InputDateComponent } from './components/input-date/input-date.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ToastModule.forRoot(),
    NglModule.forRoot(),
    TextMaskModule,
    CurrencyMaskModule
  ],
  declarations: [
    AppErrorFormComponent,
    InputDateComponent
  ],
  providers: [
  ],
  exports: [
    FormsModule,
    RouterModule,
    CommonModule,
    NglModule,
    AppErrorFormComponent,
    TextMaskModule,
    CurrencyMaskModule,
    InputDateComponent
  ]
})
export class SharedModule {

}
