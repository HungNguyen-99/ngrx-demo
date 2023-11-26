import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/models/app.state';
import { selectCart, selectCartCount } from 'src/app/ngrxs/selectors/cart.selector';

@Component({
  selector: 'app-show-cart',
  templateUrl: './show-cart.component.html',
  styleUrls: ['./show-cart.component.scss']
})
export class ShowCartComponent {

  cart: any[] = [];
  cartCount = 0;

  constructor(private store: Store) { }

  ngOnInit() {
    this.store.select(selectCartCount).subscribe(res => {
      this.cartCount = res;
    })
  }

}
