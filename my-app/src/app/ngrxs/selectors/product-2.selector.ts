import { createSelector } from "@ngrx/store";
import { AppState } from "src/app/models/app.state";


export const selectProduct2 = (state: AppState) => state.product2Store;

export const selectAllProducts2 = createSelector(selectProduct2, res => res);