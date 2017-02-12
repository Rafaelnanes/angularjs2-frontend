import { Component, OnInit, ViewContainerRef } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Router } from '@angular/router';

import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Product } from './../../models/index';
import { ProductService } from './../../services/product.service';
import { GlobalService, DefaultHttp, FilterDTO } from 'app/modules/shared/index';
declare var jQuery: any;

@Component({
  selector: 'pro-product-center',
  templateUrl: './product-center.component.html',
  styles: []
})
export class ProductCenterComponent implements OnInit {

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
    public globalService: GlobalService) {
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

  public info(product: Product): void {
    this.router.navigate(["product", "info", product.id]);
  }

  public update(product: Product): void {
    this.router.navigate(["product", "update", product.id]);
  }

  public delete(product: Product): void {
    this.productService.remove(product).then(response => {
      this.refreshProducts();
      this.toastr.success("Product removed");
    }).catch(response => {
      DefaultHttp.handleError('Error to delete the product', this.toastr, response);
    });
  }

  public openModal(product: Product): void {
    this.productSelected = product;
    jQuery(document).ready(function () {
      jQuery("#myModal").modal();
    });
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
