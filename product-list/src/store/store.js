import {combineReducers, } from "redux";
import {createStore} from "redux";
import {productReducer} from "./reducer";

const rootReducer = combineReducers({productReducer})

export const store = createStore(rootReducer)
