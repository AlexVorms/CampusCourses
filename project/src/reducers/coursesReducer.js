import { API } from "../Api/API";

const SET_COURSES = 'SET_COURSES';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
  courses:[
  ],
  isFetching: false
};
const coursesReducer = (state = initialState, action) =>{
  switch(action.type){
      case SET_COURSES:{
          return{
              ...state, courses: action.courses
          }
      }
      case TOGGLE_IS_FETCHING:{
        return {...state, isFetching: action.isFetching}
    }
      default: 
          return state;
  }
}

export const setCoursesAC = (courses) => ({type:SET_COURSES, courses})
export const setIsFetchingAC = (isFetching)=>({type:TOGGLE_IS_FETCHING, isFetching})

export function getCoursesThunk(id){
  return (dispatch) =>{
    dispatch(setIsFetchingAC(true));
    API.getCourses(id).then(data =>{
      dispatch(setCoursesAC(data));
       dispatch(setIsFetchingAC(false))
    })
  }
}
export default coursesReducer;