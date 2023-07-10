import axios from "axios";
import { add_to_cart, drop_from_cart, error, fetch_data, loading_data, toatal_price_minus, toatal_price_plus } from "./itemActionTypes";

function loadingData(result) {
    return {
        type: loading_data,
        payload: result
    }
}

function fetchData(result) {
    return {
        type: fetch_data,
        payload: result,
    }
}

function fetchingError(result) {
    return {
        type: error,
        payload: result,
    }
}

export function addCart(addItems) {
    return {
        type: add_to_cart,
        payload: addItems,
    }
}
export function dropCart(updateItems) {
    return {
        type: drop_from_cart,
        payload: updateItems,
    }
}

export function totalCartPricePlus(price) {
    return {
        type: toatal_price_plus,
        payload: price,
    }
}
export function totalCartPriceMinus(price) {
    return {
        type: toatal_price_minus,
        payload: price,
    }
}

export function fetchThunk() {
    return async function(dispatch, getState) {
        dispatch(loadingData(true))
        const result = await axios.get((`https://picsum.photos/v2/list?limit=9&page=1`))
        try {
            dispatch(fetchData(result.data))            
        } catch (error) {
            dispatch(fetchingError(error))
        }
        dispatch(loadingData(false))
    }
}