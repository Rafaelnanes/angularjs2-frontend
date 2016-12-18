import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { User } from './../../models/user';
import { UserService } from './../../services/user.service';

@Component( {
    selector: 'app-content',
    templateUrl: './app-content.component.html',
    styleUrls: ['./app-content.component.css']
})
export class AppContentComponent {
    
    public user: User = new User();

    constructor(){}
    
    public getUsersMock(): User[]{
        return new UserService().selectAllUsers();
    }
    
    public onSubmit(form: NgForm){
        console.log(form.value.sexo);
    }
    

}
