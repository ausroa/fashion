import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../services/product.service';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({opacity: 0}),
        animate('1s', style({opacity: 1}))
      ])
    ])
  ]
})
export class ProductPageComponent implements OnInit {

  constructor(private productService: ProductService) { }

  ngOnInit() {
  }

  get products() {
    return this.productService.products;
  }

  get selectedProduct() {
    return this.productService.selectedProduct;
  }
}
