import { GroupApi } from "../Api/GroupApi";

const DELETE_GROUP = 'DELETE_GROUP';
const SET_GROUP = 'SET_GROUP';
const GROUPS_IS_FETCHING = 'GROUPS_IS_FETCHING';
const ADD_GROUP = 'ADD_GROUP';
const EDIT_GROUP = 'EDIT_GROUP';


let initialState = {
    group: [],
    isFetching: false
};

const groupReducer = (state = initialState, action) =>{
    let groupState = {...state}
    groupState.group = [...state.group];
    
    switch(action.type){
        case DELETE_GROUP:{
            let array = [];
            groupState.group.map(g => {
                if(g.id !== action.id ){
                    array.push(g)
                }
            })
            groupState.group = array;
            return groupState
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
        case ADD_GROUP:{
            groupState.group.push(action.data)
            return groupState
        }
        case EDIT_GROUP:{
            let array = [];
            groupState.group.map(g => {
                if(g.id !== action.id ){
                    array.push(g)
                }
                else{
                    g.name = action.name
                    array.push(g)
                }
            })
            groupState.group = array;
            return groupState
        }
        default: 
            return state;
    }
}

// Action creators
export const deleteGroupAC = (id) => ({type:DELETE_GROUP, id})
export const setGroupAC = (group) => ({type:SET_GROUP, group})
export const setIsFetchingAC = (isFetching)=>({type:GROUPS_IS_FETCHING, isFetching})
export const addGroupAC = (data) => ({type:ADD_GROUP, data})
export const editGroupAC = (id, name) => ({type:EDIT_GROUP, id, name})
// Thunks
 export function getGroupsThunk(){ 
    return async (dispatch) => {
    //dispatch(setIsFetchingAC(true));
    await GroupApi.getGroups().then(data =>{
          dispatch(setGroupAC(data))
          //dispatch(setIsFetchingAC(false))
        })
    }
}

export function addGroupThunk(name){
    return(dispatch) => {
        GroupApi.createGroup(name).then(data => {
            if(data.status === 200){
                dispatch(addGroupAC(data.data))
            }
            else{
                alert('Что-то пошло не так')
            }
          
        })
    }
}

export function deleteGroupThunk(id){
    return async (dispatch) => {
        await GroupApi.deleteGroup(id)
        .then( async data=>{
            if(data.status === 200){
            await dispatch(deleteGroupAC(id))
            }
        })
    }
}

export function editGroupThunk(name,id){
    return async dispatch => {
        await GroupApi.editGroup(name,id)
        .then(data => {
            if(data.status === 200){
                dispatch(editGroupAC(id,name))
            }
        })
    }
}
export default groupReducer;