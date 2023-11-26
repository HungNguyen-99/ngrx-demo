import { createAction, props } from "@ngrx/store";
import { Cart } from "src/app/models/cart.model";

export const addToCart = createAction('[Cart] Add To Cart', props<{ item: Cart }>());