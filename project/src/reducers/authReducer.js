import { API } from "../Api/API";

const SET_USER_DATA = 'SET_USER_DATA';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const USER_IS_AUTH = 'USER_IS_AUTH';


let initialState = {
    email: '',
    fullName:null,
    birthDate:null,
    isAuth: false,
    isFetching: false,
    Role:{
        isTeacher: false,
        isStudent: false,
        isAdmin:false
    }
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
            return{...state, isAuth: action.data.isAuth, email: action.data.email}
        }
        default: 
            return state;
    }

}

export const setUserDataAC = (data) => ({type:SET_USER_DATA, data})
export const setIsAuthorisationAC = ( email,isAuth) => ({type:USER_IS_AUTH, data:{isAuth, email}})
export const setIsFetchingAC = (isFetching)=>({type:TOGGLE_IS_FETCHING, isFetching})

// THUNKS

export function getProfileThunk(){
    return(dispatch) =>{
        dispatch(setIsFetchingAC(true));
        API.getProfile().then(data =>{
            dispatch(setUserDataAC(data))
            dispatch(setIsFetchingAC(false))
          })
    }
}

export function authorisationThunk(email, password){
    return(dispatch) => {
        API.authorisation(email,password).then(data =>{
            dispatch(setIsAuthorisationAC(email,true));
        })
    }
}

export function logoutThunk(){
    return(dispatch)=> {
        API.logout().then(data =>{
            dispatch(setIsAuthorisationAC('', false));
        })
    }
}

export function registrationThunk(data){
    return(dispatch) => {
        API.Registration(data).then(response=>{
            console.log("OK");
        })
    }
}

export function editProfileThunk(data){
    return(dispatch) => {
    }
}
export default authReducer;