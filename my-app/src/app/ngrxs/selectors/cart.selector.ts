import { createSelector } from "@ngrx/store";
import { AppState } from "src/app/models/app.state";


export const selectCart = (state: AppState) => state.cartStore;

export const selectCartCount = createSelector(selectCart, (state) => state.cart.length);