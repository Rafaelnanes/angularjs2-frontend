export class Menu {
    constructor(public priority?:number, public title?: string, public childs?: MenuChild[]){}
}

export class MenuChild {
    constructor(public path?: string, public name?:string, public childs?: MenuChild[]){}
}
