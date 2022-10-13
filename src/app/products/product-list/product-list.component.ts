import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.interface';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  title: string = 'Products';
  products: Product[];
  selectedProduct: Product | undefined;

  constructor(
    private productService: ProductService
  ) {

  }

  onSelect(product: Product): void {
    this.selectedProduct = product;
  }

  ngOnInit(): void {
    this
      .productService
      .products$
      .subscribe(
        response => this.products = response
      )
  }

}
