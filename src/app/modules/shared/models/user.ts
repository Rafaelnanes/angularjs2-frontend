export class User {
  constructor(public login?: string, public password?: string, public id?: number, public userLevels?: UserLevel[]) { }
}

export class UserLevel {
  constructor(public id?: number, public level?: string) { }
}
