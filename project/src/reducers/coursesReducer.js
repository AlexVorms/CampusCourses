import { API } from "../Api/API";

const SET_COURSES = 'SET_COURSES';
const COURSES_IS_FETCHING = 'COURSES_IS_FETCHING';

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
      case COURSES_IS_FETCHING:{
        return {...state, isFetching: action.isFetching}
    }
      default: 
          return state;
  }
}

export const setCoursesAC = (courses) => ({type:SET_COURSES, courses})
export const setIsFetchingAC = (isFetching)=>({type:COURSES_IS_FETCHING, isFetching})

export function getCoursesThunk(id){
  return (dispatch) =>{
    dispatch(setIsFetchingAC(true));
    API.getCourses(id).then(data =>{
      console.log(data)
      dispatch(setCoursesAC(data));
       dispatch(setIsFetchingAC(false))
    })
  }
}
export default coursesReducer;