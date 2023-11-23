import { Product } from "src/app/models/product.model";
import { createReducer, on } from "@ngrx/store"
import { loadProductsFailure, loadProductsSuccess } from "../actions/product.action";


export const initialState: ReadonlyArray<Product> = [];

export const productReducer = createReducer(
    initialState,
    on(loadProductsSuccess, (state, { products }) => products),
    on(loadProductsFailure, state => [])
)