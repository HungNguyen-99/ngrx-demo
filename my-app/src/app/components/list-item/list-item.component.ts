import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent {

  product$ = this.store.select('products');

  constructor(private store: Store<{ products: Product[] }>) { }
}
