import { API } from "../Api/API";
const SET_USER_DATA = 'SET_USER_DATA';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const USER_IS_AUTH = 'USER_IS_AUTH';
const PROFILE_EDIT = 'PROFILE_EDIT';
const SET_USER_STATUS = 'SET_USER_STATUS';
const DELETE_DATA = 'DELETE_DATA'

let initialState = {
    email: '',
    fullName:null,
    birthDate:null,
    isAuth: false,
    isFetching: false,
    Role:{
        isTeacher: false,
        isStudent: false,
        isAdmin: false
    }
};

const authReducer = (state = initialState, action) =>{
    let authState = {...state};
  
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
        case PROFILE_EDIT:{
            authState.birthDate = action.data.birthDate
            authState.fullName = action.data.fullName
          
            return authState
        }
        case SET_USER_STATUS:{
           
            return{
                ...state,
                Role: action.data
            }
        }
        case DELETE_DATA:{
            return {
                ...state,
                email: '',
                fullName:null,
                birthDate:null,
                isAuth: false,
                isFetching: false,
                Role:{
                    isTeacher: false,
                    isStudent: false,
                    isAdmin: false
                }
            }
        }
        default: 
            return state;
    }

}

export const setUserDataAC = (data) => ({type:SET_USER_DATA, data})
export const setIsAuthorisationAC = ( email,isAuth) => ({type:USER_IS_AUTH, data:{isAuth, email}})
export const setIsFetchingAC = (isFetching)=>({type:TOGGLE_IS_FETCHING, isFetching})
export const editProfileAC = (fullName, birthDate) =>({type:PROFILE_EDIT, data:{fullName, birthDate}})
export const setUserStatus = (data) =>({type:SET_USER_STATUS, data:data})
export const deleteUserData = () =>({type:DELETE_DATA})
// THUNKS

export function getProfileThunk(){
    return(dispatch) =>{
      
        API.getProfile().then(data =>{
            dispatch(setUserDataAC(data))
           
          })
    }
}
export function getUserStatusThunk(){
    return async(dispatch) =>{
        await API.getUserStatus().then(data =>{
            if(data !== undefined){
                dispatch(setUserStatus(data))
            }
        })
    }
}
export function authorisationThunk(email, password){
    return (dispatch) => {
         dispatch(setIsFetchingAC(true));
        API.authorisation(email,password).then(response =>{
            if (response === 200){
            dispatch(getUserStatusThunk());
            dispatch(setIsAuthorisationAC(email,true));
             dispatch(setIsFetchingAC(false));
            }
            else{
                alert('Неверное имя пользователя или пароль')
                dispatch(setIsFetchingAC(false));
            }
        })
}
}

export function logoutThunk(){
     return (dispatch) => {
        API.logout().then(data =>{
            if(data !== undefined && data.status === 200){
            dispatch(setIsAuthorisationAC('', false));
            dispatch(deleteUserData)
            }
            else{
                
            }
        })
    }
}

export function registrationThunk(data){
    return(dispatch) => {
        API.Registration(data).then(response=>{
            if(response.status === 200){
                alert('Вы успешно зарегистрировались')
            }
            else{
                alert('Что-то пошло не так')
            }
        })
    }
}

export function editProfileThunk(fullName, birthDate){
    return(dispatch) => {
        API.EditProfile(fullName, birthDate).then(response=>{
            if(response.status === 200){
            dispatch(editProfileAC(fullName, birthDate))
            }
        })
    }
}
export default authReducer;