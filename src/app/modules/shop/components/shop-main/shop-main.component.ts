import { Component, OnInit, ViewContainerRef } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Router } from '@angular/router';

import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ProductService, Product } from 'app/modules/product/index';
import { GlobalService, DefaultHttp, FilterDTO } from 'app/modules/shared/index';
import { CartGlobalService } from './../../services/index';
declare var jQuery: any;

@Component({
  templateUrl: './shop-main.component.html',
  styles: []
})
export class ShopMainComponent implements OnInit {

  public products: Product[];
  public productSelected: Product;
  public filterDTO: FilterDTO<Product>;
  public size: number;

  constructor(
    private productService: ProductService,
    private router: Router,
    public toastr: ToastsManager,
    public vcr: ViewContainerRef,
    public defaultHttp: DefaultHttp,
    public globalService: GlobalService,
    private cartGlobalService: CartGlobalService) {
    this.toastr.setRootViewContainerRef(vcr);

  }

  public ngOnInit() {
    this.size = 0;
    this.setFilterDto();
  }

  public onPageChange(pageChange: number): void {
    this.filterDTO.setOffset(pageChange);
    this.refreshProducts();
  }

  private setFilterDto(): void {
    this.filterDTO = new FilterDTO<Product>();
    this.filterDTO.currentPage = 1;
    this.filterDTO.pageSize = 5;
    this.filterDTO.setOffset(1);
  }

  private refreshProducts() {
    this.productService.getAllByFilter(this.filterDTO).then(response => {
      let json = response.json();
      this.products = json.data;
      this.size = json.size;
    }).catch(response => {
      DefaultHttp.handleError('Error getting product list', this.toastr, response);
    });
  }

  public openModal(): void {
    jQuery(document).ready(function () {
      jQuery("#myCartModal").modal();
    });
  }

  public addToCart(product: Product): void {
    this.cartGlobalService.addProduct(product);
  }

  public orderBy(key: string): void {
    if (key == this.filterDTO.orderProperty) {
      this.filterDTO.orderAsc = !this.filterDTO.orderAsc;
    } else {
      this.filterDTO.orderProperty = key;
      this.filterDTO.orderAsc = true;
    }
    this.refreshProducts();
  }

}
