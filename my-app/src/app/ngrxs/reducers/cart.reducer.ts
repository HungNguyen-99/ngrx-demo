import { createReducer, on } from "@ngrx/store";
import { addToCart } from "../actions/cart.action";

export const initialState = {
    cart: []
}

export const cartReducer = createReducer(
    initialState,
    on(addToCart, (state: any, { item }) => {
        return { ...state, cart: [...state.cart, item] }
    })
)