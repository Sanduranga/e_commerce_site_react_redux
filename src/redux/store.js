import { combineReducers, createStore,applyMiddleware } from "redux"
import { navBarReduser } from "./navBar/navBarReduser"
import thunk from "redux-thunk"
import logger from "redux-logger"
import { itemReduser } from "./items/itemReduser"
import {composeWithDevTools} from 'redux-devtools-extension'


const rootReduser = combineReducers({
    navigationBar: navBarReduser,
    items: itemReduser,

})

const store = createStore(
    rootReduser,
    composeWithDevTools(applyMiddleware(thunk,logger))
)



export default store