import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadProducts } from 'src/app/ngrxs/actions/product.action';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent {

  constructor(private store: Store) { }

  loadProduct() {
    this.store.dispatch(loadProducts());
  }
}
