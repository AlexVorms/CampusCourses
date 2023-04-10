import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
import groupReducer from "../reducers/groupReduser";
import coursesReducer from "../reducers/coursesReduser";


let reducers = combineReducers({
    groupPage: groupReducer,
    coursesPage: coursesReducer
});

let store = createStore(reducers);

export default store;
