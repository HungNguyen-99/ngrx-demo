import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddItemComponent } from './components/add-item/add-item.component';
import { ListItemComponent } from './components/list-item/list-item.component';

import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects';
import { ProductEffect } from './ngrxs/effects/product.effect';
import { productReducer } from './ngrxs/reducers/product.reducer';


@NgModule({
  declarations: [
    AppComponent,
    AddItemComponent,
    ListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ products: productReducer }),
    EffectsModule.forRoot([ProductEffect])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
