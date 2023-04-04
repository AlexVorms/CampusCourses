import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
import groupReducer from "../reducers/groupReduser";


let reducers = combineReducers({
    groupPage: groupReducer
});

let store = createStore(reducers);
export default store;
