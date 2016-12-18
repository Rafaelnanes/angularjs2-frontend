import { Injectable } from '@angular/core';

import { User } from './../models/user';

@Injectable()
export class UserService {

    private usersMock: User[] = [new User( 'Rafael', 'Masculino' ), new User( 'Barbara', 'Feminino' )];

    constructor() { }

    public selectAllUsers(): User[] {
        return this.usersMock;
    }

}
