import { createAction, props } from "@ngrx/store";
import { Product } from "src/app/models/product.model";

export const loadProduct2 = createAction('[Product 2] load product 2');

export const loadProduct2Success = createAction('[Product 2] load product 2 success', props<{ products: Product[] }>());

export const loadProduct2Failure = createAction('[Product 2] load product 2 failure', props<{ error: any }>());

