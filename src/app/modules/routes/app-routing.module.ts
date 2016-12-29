import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppContentMainComponent, AppContentListComponent, AppContentCreateComponent } from './../../template/app-content/index';

const routesCore: Routes = [
    {
        path: '',
        component: AppContentMainComponent
    },
    {
        path: 'usuario/listar',
        component: AppContentListComponent
    },
    {
        path: 'usuario/cadastrar',
        component: AppContentCreateComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routesCore)
    ],
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule { }
