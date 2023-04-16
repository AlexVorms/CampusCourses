import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
import groupReducer from "../reducers/groupReducer";
import coursesReducer from "../reducers/coursesReducer";
import authReducer from "../reducers/authReducer";
import courseDetailsReducer from "../reducers/courseDetailsReducer";
import ThunkMiddleware from "redux-thunk";


let reducers = combineReducers({
    groupPage: groupReducer,
    coursesPage: coursesReducer,
    auth: authReducer,
    courseDetailsPage:courseDetailsReducer
});

let store = createStore(reducers, applyMiddleware(ThunkMiddleware));

export default store;
