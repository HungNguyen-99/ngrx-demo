import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts() {
    const fakeProducts: Product[] = [
      { id: 1, name: 'Product 1', price: 100 },
      { id: 2, name: 'Product 2', price: 200 },
      { id: 3, name: 'Product 3', price: 300 }
    ];
    return of(fakeProducts);
  }
}
