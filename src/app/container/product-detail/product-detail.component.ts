import { Component, Input } from '@angular/core';
import { ProductListComponent } from '../product-list/product-list.component';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {

  @Input()
  productListComponent: ProductListComponent = undefined;

  product: Product;

  ngOnInit() { // all the properties are initialised
     this.product = this.productListComponent.selectedProduct;
  }

}
