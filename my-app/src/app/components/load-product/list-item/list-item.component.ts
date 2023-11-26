import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from 'src/app/models/product.model';
import { selectAllProducts } from 'src/app/ngrxs/selectors/product.selector';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent {

  products: Product[] = []

  constructor(
    private store: Store<{ productStore: Product[] }>
  ) { }

  ngOnInit() {
    this.store.select(selectAllProducts).subscribe(res => {
      this.products = res;
    })
  }
}
