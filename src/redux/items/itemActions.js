import axios from "axios";
import { add_to_cart, error, fetch_data, loading_data } from "./itemActionTypes";

function loadData(result) {
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

export function cart(buyItems) {
    return {
        type: add_to_cart,
        payload: buyItems,
    }
}

export function fetchThunk() {
    return async function(dispatch, getState) {
        dispatch(loadData(true))
        const result = await axios.get((`https://picsum.photos/v2/list?limit=9&page=1`))
        try {
            dispatch(fetchData(result.data))            
        } catch (error) {
            dispatch(fetchingError(error))
        }
        dispatch(loadData(false))
    }
}