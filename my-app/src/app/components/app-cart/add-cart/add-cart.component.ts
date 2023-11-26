import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { addToCart } from 'src/app/ngrxs/actions/cart.action';

@Component({
  selector: 'app-add-cart',
  templateUrl: './add-cart.component.html',
  styleUrls: ['./add-cart.component.scss']
})
export class AddCartComponent {

  constructor(private store: Store) { }

  addToCart() {
    let cart = {
      id: 0,
      name: 'cart 1'
    }
    this.store.dispatch(addToCart({ item: cart }))
  }
}
