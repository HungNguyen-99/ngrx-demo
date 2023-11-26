import { Product2Effect } from "../ngrxs/effects/product-2.effect";
import { ProductEffect } from "../ngrxs/effects/product.effect";
import { cartReducer } from "../ngrxs/reducers/cart.reducer";
import { product2Reducer } from "../ngrxs/reducers/product-2.reducer";
import { productReducer } from "../ngrxs/reducers/product.reducer";

export interface AppState {
    cartStore?: any;
    productStore?: any;
    product2Store?: any;
}

export const appConfict = {
    reducers: {
        cartStore: cartReducer,
        productStore: productReducer,
        product2Store: product2Reducer
    },
    effects: [ProductEffect, Product2Effect]
} 