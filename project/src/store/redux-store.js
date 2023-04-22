import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
import groupReducer from "../reducers/groupReducer";
import coursesReducer from "../reducers/coursesReducer";
import authReducer from "../reducers/authReducer";
import courseDetailsReducer from "../reducers/courseDetailsReducer";
import ThunkMiddleware from "redux-thunk";
import MyCoursesReducer from "../reducers/myCoursesReducer";
import MyTeachingCoursesReducer from "../reducers/myTeachingCoursesReducer";

let reducers = combineReducers({
    groupPage: groupReducer,
    coursesPage: coursesReducer,
    auth: authReducer,
    courseDetailsPage:courseDetailsReducer,
    MyCoursesPage: MyCoursesReducer,
    MyTeachingCoursesPage: MyTeachingCoursesReducer
});

let store = createStore(reducers, applyMiddleware(ThunkMiddleware));

export default store;
