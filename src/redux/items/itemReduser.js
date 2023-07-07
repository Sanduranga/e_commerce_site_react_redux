import { add_to_cart, error, fetch_data, loading_data } from "./itemActionTypes";

const initialState = {
    itemList: [],
    itemLoading: false,
    cartList: [],
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
    
        default:
            return state
    }
}