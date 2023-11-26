import { createReducer, on } from "@ngrx/store";
import { Product } from "src/app/models/product.model";
import { loadProduct2Failure, loadProduct2Success } from "../actions/product-2.action";

export const initialState: ReadonlyArray<Product> = [];

export const product2Reducer = createReducer(
    initialState,
    on(loadProduct2Success, (state, { products }) => products),
    on(loadProduct2Failure, (state) => [])
)