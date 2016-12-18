import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { User } from './../../models/user';
import { UserService } from './../../services/user.service';

@Component( {
    selector: 'app-content-list',
    templateUrl: './app-content-list.component.html'
})
export class AppContentListComponent {

    public user: User = new User();

    constructor() { }

    public getUsersMock(): User[] {
        return new UserService().selectAllUsers();
    }

    public onSubmit( form: NgForm ) {
        console.log( form.value.sexo );
    }


}
