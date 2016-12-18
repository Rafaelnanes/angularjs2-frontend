import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavBarComponent } from './template/nav-bar/nav-bar.component';
import { AppContentListComponent } from './template/app-content/app-content-list.component';
import { AppContentCreateComponent } from './template/app-content/app-content-create.component';

const appRoutes: Routes = [
    {
        path: 'listar', component: AppContentListComponent, data: {
            title: 'Listar Usuários'
        }
    },
    {
        path: '', component: AppContentListComponent, data: {
            title: 'Listar Usuários'
        }
    },
    {
        path: 'cadastrar', component: AppContentCreateComponent, data: {
            title: 'Cadastrar Usuário'
        }
    }
];

@NgModule( {
    declarations: [
        AppComponent,
        NavBarComponent,
        AppContentListComponent,
        AppContentCreateComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot( appRoutes )
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
