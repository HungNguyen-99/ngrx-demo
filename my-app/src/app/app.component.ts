import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { loadProducts } from './ngrxs/actions/product.action';
import { loadProduct2 } from './ngrxs/actions/product-2.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';

  constructor(
    private router: Router,
    private store: Store
  ) { }

  ngOnInit() {
    this.store.dispatch(loadProducts());
    this.store.dispatch(loadProduct2());
  }

  navigateItem1Tab() {
    this.router.navigateByUrl('/item-1');
  }

  navigateItem2Tab() {
    this.router.navigateByUrl('/item-2');
  }
}
