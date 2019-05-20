import {Component, EventEmitter, HostListener, OnInit, Output} from '@angular/core';
import {ProductService} from '../../services/product.service';
import {animate, style, transition, trigger} from '@angular/animations';
import {Product} from '../../services/product';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-shop-page',
  templateUrl: './shop-page.component.html',
  styleUrls: ['./shop-page.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({opacity: 0}),
        animate('1s', style({opacity: 1}))
      ])
    ])
  ]
})
export class ShopPageComponent implements OnInit {
  private product: Product;

  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  get products() {
    return this.productService.products;
  }

  goToProduct(product: Product) {
    this.productService.setSelectedProduct(product);
    this.router.navigate(['shop', product.name]);
  }
}
