import { API } from "../Api/API";

const SET_MY_COURSES = 'SET__MY_COURSES';
const MY_COURSE_IS_FETCHING = 'MY_COURSE_IS_FETCHING';

let initialState = {
  MyCourses:[
  ],
  isFetching: false
};
const MyCoursesReducer = (state = initialState, action) =>{
  switch(action.type){
      case SET_MY_COURSES:{
          return{
              ...state, MyCourses: action.MyCourses
          }
      }
      case MY_COURSE_IS_FETCHING:{
        return {...state, isFetching: action.isFetching}
    }
      default: 
          return state;
  }
}

export const setCoursesAC = (MyCourses) => ({type:SET_MY_COURSES, MyCourses})
export const setIsFetchingAC = (isFetching)=>({type:MY_COURSE_IS_FETCHING, isFetching})

export  function getMyCoursesThunk(){
  return (dispatch) =>{
    dispatch(setIsFetchingAC(true));
    API.getMyCourses().then(data =>{
       dispatch(setCoursesAC(data));
       dispatch(setIsFetchingAC(false))
    })
  }
}
export default MyCoursesReducer;