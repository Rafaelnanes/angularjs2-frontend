import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavBarComponent } from './template/nav-bar/nav-bar.component';
import { AppContentListComponent } from './template/app-content/app-content-list.component';
import { AppContentCreateComponent } from './template/app-content/app-content-create.component';
import { AppContentMainComponent } from './template/app-content/app-content-main.component';

import { ProdutosModule } from './modules/produtos/produtos.module';

import { AppRoutingModule } from './modules/routes/app-routing.module';

import { produtoComponents, produtoRoutes } from 'produto-1-module';

@NgModule({
    declarations: [
        AppComponent,
        NavBarComponent,
        AppContentListComponent,
        AppContentCreateComponent,
        AppContentMainComponent,
        produtoComponents
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        RouterModule.forRoot(produtoRoutes)

    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
