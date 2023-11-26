import { createSelector } from "@ngrx/store";
import { AppState } from "src/app/models/app.state";


export const selectProduct = (state: AppState) => state.productStore;

export const selectAllProducts = createSelector(selectProduct, res => res);