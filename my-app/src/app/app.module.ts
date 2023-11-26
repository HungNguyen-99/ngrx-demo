import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddItemComponent } from './components/load-product/add-item/add-item.component';
import { ListItemComponent } from './components/load-product/list-item/list-item.component';

import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects';
import { ProductEffect } from './ngrxs/effects/product.effect';
import { productReducer } from './ngrxs/reducers/product.reducer';
import { AddCartComponent } from './components/app-cart/add-cart/add-cart.component';
import { ShowCartComponent } from './components/app-cart/show-cart/show-cart.component';
import { cartReducer } from './ngrxs/reducers/cart.reducer';
import { ListItem2Component } from './components/load-product/list-item-2/list-item-2.component';
import { product2Reducer } from './ngrxs/reducers/product-2.reducer';
import { Product2Effect } from './ngrxs/effects/product-2.effect';
import { appConfict } from './models/app.state';


@NgModule({
  declarations: [
    AppComponent,
    AddItemComponent,
    ListItemComponent,
    AddCartComponent,
    ShowCartComponent,
    ListItem2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(appConfict.reducers),
    EffectsModule.forRoot(appConfict.effects)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
