import { createAction, props } from "@ngrx/store";
import { Product } from "src/app/models/product.model";

export const loadProducts = createAction('[Product] load products');

export const loadProductsSuccess = createAction(
    '[Product] load products success',
    props<{ products: Product[] }>()
)

export const loadProductsFailure = createAction(
    '[Product] load products failure',
    props<{ error: any }>()
)