import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from 'src/app/models/product.model';
import { selectAllProducts2 } from 'src/app/ngrxs/selectors/product-2.selector';

@Component({
  selector: 'app-list-item-2',
  templateUrl: './list-item-2.component.html',
  styleUrls: ['./list-item-2.component.scss']
})
export class ListItem2Component {

  products: Product[] = [];

  constructor(
    private store: Store<{ product2Store: any }>
  ) { }

  ngOnInit() {
    this.store.select(selectAllProducts2).subscribe(res => {
      this.products = res;
    })
  }

}
