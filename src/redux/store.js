import { combineReducers, createStore,applyMiddleware } from "redux"
import { navBarReduser } from "./navBar/navBarReduser"
import thunk from "redux-thunk"
import logger from "redux-logger"
import { itemReduser } from "./items/itemReduser"


const rootReduser = combineReducers({
    navigationBar: navBarReduser,
    items: itemReduser,

})

const store = createStore(rootReduser,applyMiddleware(thunk,logger))



export default store