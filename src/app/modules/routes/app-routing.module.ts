import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppContentMainComponent, AppContentListComponent, AppContentCreateComponent } from './../../template/app-content/index';

const appRoutes: Routes = [

    {
        path: 'cadastrar', component: AppContentCreateComponent
    },
    {
        path: '', component: AppContentMainComponent
    },
    {
        path: 'listar', component: AppContentListComponent
    }
];

@NgModule( {
    imports: [
        RouterModule.forRoot( appRoutes )
    ],
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule { }
