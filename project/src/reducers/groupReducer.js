import { API } from "../Api/API";


const DELETE_GROUP = 'DELETE_GROUP';
const SET_GROUP = 'SET_GROUP';
const GROUPS_IS_FETCHING = 'GROUPS_IS_FETCHING';
const CREATE_GROUP = 'CREATE_GROUP';

let initialState = {
    group: [],
    isFetching: false
};

const groupReducer = (state = initialState, action) =>{
    switch(action.type){
        case DELETE_GROUP:
     
            return {
                ...state,
                group: state.group.map(group => {
                    if (group.id !== action.id) {
                        return {...group, name:"delete"};
                    }
                    return group;
                })
            }
        case SET_GROUP:{
            if(state.group.length === 0){
                return{
                    ...state, 
                    group:action.group
                }
            }
        }
        case GROUPS_IS_FETCHING:{
            return {...state, isFetching: action.isFetching}
        }
        default: 
            return state;
    }
}

// Action creators
export const deleteGroupAC = (id) => ({type:DELETE_GROUP, id})
export const setGroupAC = (group) => ({type:SET_GROUP, group})
export const setIsFetchingAC = (isFetching)=>({type:GROUPS_IS_FETCHING, isFetching})

// Thunks
 export function getGroupsThunk(){ 
    return (dispatch) => {
    dispatch(setIsFetchingAC(true));
    API.getGroups().then(data =>{
          dispatch(setGroupAC(data))
          dispatch(setIsFetchingAC(false))
        })
    }
}

export function addGroupThunk(name){
    return(dispatch) => {
        API.createGroup(name)
        .then(data => {
            console.log(data)
        })
    }
}

export function deleteGroupThunk(id){
    return(dispatch) => {
        API.deleteGroup(id)
        .then(data=>{
            console.log(data)
        })
    }
}
export default groupReducer;