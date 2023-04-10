
const DELETE_GROUP = 'DELETE_GROUP';
const SET_GROUP = 'SET_GROUP';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

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
                    if (group.id === action.id) {
                        return {...group, name:"delete"};
                    }
                    return group;
                })
            }
        case SET_GROUP:{
            return{
                ...state, group:[...state.group, ...action.group]
            }
        }
        case TOGGLE_IS_FETCHING:{
            return {...state, isFetching: action.isFetching}
        }
        default: 
            return state;
    }
}

export const deleteGroup = (id) => ({type:DELETE_GROUP, id})
export const setGroupAC = (group) => ({type:SET_GROUP, group})
export const setIsFetchingAC = (isFetching)=>({type:TOGGLE_IS_FETCHING, isFetching})
export default groupReducer;