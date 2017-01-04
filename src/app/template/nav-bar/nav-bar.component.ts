import { Component, OnInit } from '@angular/core';
import { Menu, MenuChild } from './../../modules/shared/models/menu';
//import { ProdutosService } from './../../../../node_modules/produto-2-module/src/services/produtos.service';
import { ProdutosService } from './../../imports';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html'
})
export class NavBarComponent {

  public allMenus: Menu[];

  constructor(private produtosService: ProdutosService) {
  }

  public getAllMenus(): Menu[] {
    this.allMenus = [];
    this.allMenus.push(new Menu(3, 'Usuário', [new MenuChild('/usuario/listar', 'Listar', null), new MenuChild('/usuario/cadastrar', 'Cadastrar', null)]));

    let menusProduto: Menu[] = this.produtosService.getAllMenus();
    for (let entry of menusProduto) {
      this.allMenus.push(entry);
    }
    this.allMenus = this.sortMenus(this.allMenus);
    return this.allMenus;
  }

  private sortMenus(menus: Menu[]) {
    return menus.sort((o1, o2) => {
      if (o1.priority > o2.priority) {
        return 1;
      }

      if (o1.priority < o2.priority) {
        return -1;
      }

      return 0;
    });
  }

}
