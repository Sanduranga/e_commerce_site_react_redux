import { add_to_cart, drop_from_cart, error, fetch_data, loading_data, toatal_price_minus, toatal_price_plus } from "./itemActionTypes";

const initialState = {
    itemList: [],
    itemLoading: false,
    cartList: [],
    cartPrice: 0.00,
}

export function itemReduser(state = initialState, action) {
    switch (action.type) {
        case loading_data:
            return {
                ...state,
                itemLoading: action.payload,
            }
        case fetch_data:
            return {
                ...state,
                itemList: action.payload,
            }
        case add_to_cart:
            return {
                ...state,
                cartList: action.payload,
            }
        case drop_from_cart:
            return {
                ...state,
                cartList: action.payload,
            }
        case toatal_price_plus:
            return {
                ...state,
                cartPrice: state.cartPrice + action.payload,
            }
        case toatal_price_minus:
            return {
                ...state,
                cartPrice: state.cartPrice - action.payload,
            } 
    
        default:
            return state
    }
}