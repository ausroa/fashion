import { Injectable } from '@angular/core';
import {Product} from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public selectedProduct: Product;
  public products: Product[] = [
    {
      name: 'duffel',
      img: 'assets/pictures/shop_duffel.jpg',
      price: '0.00',
      displayImgs: {},
      modelNumber: '',
      description: '',
      features: '',
      details: '',
      dimensions: ''
    },
    {
      name: 'lawson bag - Linen',
      img: 'assets/pictures/shop_lawson.jpg',
      price: '0.00',
      displayImgs: {
        img1: 'assets/pictures/lawson_1_web.jpg',
        img2: 'assets/pictures/lawson_back_web.jpg',
        img3: 'assets/pictures/lawsont_front_web.jpg',
        img4: 'assets/pictures/lawson_lining_web.jpg'
      },
      modelNumber: '',
      description: 'Constructed in hand-dyed and linen printed leather, which is designed to age expressively while\n' +
        'enduring the trials of daily use. The fully-padded body and waterproof ripstop lining keeps\n' +
        'this piece held up well for any range of uses.',
      features: '- 100% upcycled leather\n' +
        '- Fully padded\n' +
        '- Waterproof lining\n' +
        '- Zip and magnetic pocket closures\n',
      details: 'Shown:\n' +
        'Linen blue / ripstop khaki lining / antique brass hardware\n',
      dimensions: 'One size: 80 x 45 x 25cm'
    },
    {
      name: 'original pack ballistic',
      img: 'assets/pictures/shop_pack.jpg',
      price: '0.00',
      displayImgs: {
        img1: 'assets/pictures/pack_devin_1.jpg',
        img2: 'assets/pictures/pack_crop_2.jpg',
        img3: 'assets/pictures/pack_crop_3.jpg',
        img4: 'assets/pictures/pack_crop_4.jpg',
        img5: 'assets/pictures/pack_crop_1.jpg'
      },
      modelNumber: '000',
      description: 'The original sfr1 pack, developed for use in urban and remote exploration. A daily ' +
        'commuter made from a waterproof balistic shell and ripstop lining; trimmed with ' +
        'recycled leather, and metal hardware; zipped pockets and magnetic closure.\n\n' +
        'Made to order and hand numbered.',
      features: '- 100% Waterproof\n' +
        '- Magnetic and drawstring closure\n' +
        '- Padded Base, laptop pocket and straps',
      details: 'Shown:\n' +
        'Ballistic black / matte back leather / ripstop grey lining / nickel hardware',
      dimensions: 'One Size: 80cm x 45cm x 25cm'
    },
    {
      name: 'passport',
      img: 'assets/pictures/shop_passport.jpg',
      price: '0.00',
      displayImgs: {},
      modelNumber: '',
      description: '',
      features: '',
      details: '',
      dimensions: ''
    },
    {
      name: 'original pack ballistic',
      img: 'assets/pictures/shop_pack.jpg',
      price: '0.00',
      displayImgs: {
        img1: 'assets/pictures/pack_devin_1.jpg',
        img2: 'assets/pictures/pack_crop_2.jpg',
        img3: 'assets/pictures/pack_crop_3.jpg',
        img4: 'assets/pictures/pack_crop_4.jpg',
        img5: 'assets/pictures/pack_crop_1.jpg'
      },
      modelNumber: '000',
      description: 'The original sfr1 pack, developed for use in urban and remote exploration. A daily ' +
        'commuter made from a waterproof balistic shell and ripstop lining; trimmed with ' +
        'recycled leather, and metal hardware; zipped pockets and magnetic closure.\n\n' +
        'Made to order and hand numbered.',
      features: '- 100% Waterproof\n' +
        '- Magnetic and drawstring closure\n' +
        '- Padded Base, laptop pocket and straps',
      details: 'Shown: ' +
        'Ballistic black / matte back leather / ripstop grey lining / nickel hardware',
      dimensions: 'One Size: 80cm x 45cm x 25cm'
    },
    {
      name: 'passport',
      img: 'assets/pictures/shop_passport.jpg',
      price: '0.00',
      displayImgs: {},
      modelNumber: '',
      description: '',
      features: '',
      details: '',
      dimensions: ''
    }
  ];

  constructor() { }

  setSelectedProduct(product: Product): void {
    this.selectedProduct = product;
  }

}
