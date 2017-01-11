import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './components/main/main.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AuthGuardService } from './services/auth-guard.service';

const appRoutes: Routes = [
  {
    path: 'main',
    component: MainComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  { path: '**', component: PageNotFoundComponent },
  {
    path: '',
    redirectTo: '/main',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [],
  declarations: []
})
export class AppRoutingModule { }
