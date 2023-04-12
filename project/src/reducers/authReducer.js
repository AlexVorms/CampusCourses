import { API } from "../Api/API";

const SET_USER_DATA = 'SET_USER_DATA';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const USER_IS_AUTH = 'USER_IS_AUTH';

let initialState = {
    email: null,
    fullName:null,
    birthDate:null,
    isAuth:false,
    isFetching: false
};

const authReducer = (state = initialState, action) =>{
    switch(action.type){
        case TOGGLE_IS_FETCHING:{
            return {...state, isFetching: action.isFetching}
        }
        case SET_USER_DATA:{
            return{...state, 
                fullName: action.data.fullName,
                birthDate: action.data.birthDate,
                email: action.data.email
            }
        }
        case USER_IS_AUTH:{
            return{...state, isAuth: action.isAuth}
        }
        default: 
            return state;
    }

}

export const setUserDataAC = (data) => ({type:SET_USER_DATA, data})
export const setIsAuthorisationAC = (isAuth) => ({type:USER_IS_AUTH, isAuth})
export const setIsFetchingAC = (isFetching)=>({type:TOGGLE_IS_FETCHING, isFetching})

// THUNKS

export function getProfileThunk(){
    return(dispatch) =>{
        dispatch(setIsFetchingAC(true));
        API.getProfile().then(data =>{
            console.log(data)
            dispatch(setUserDataAC(data))
            dispatch(setIsFetchingAC(false))
          })
    }
}

export function authorisationThunk(email, password){
    return(dispatch) => {
        API.authorisation(email,password).then(data =>{
            dispatch(setIsAuthorisationAC(true))
            console.log(data);
        })
    }
}
export default authReducer;