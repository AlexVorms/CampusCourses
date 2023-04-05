
const DELETE_GROUP = 'DELETE_GROUP';
const SET_GROUP = 'SET_GROUP';

let initialState = {
    group: [
        
      ]
};

const groupReducer = (state = initialState, action) =>{
    switch(action.type){
        case DELETE_GROUP:
            debugger
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
        default: 
            return state;
    }
}

export const deleteGroup = (id) => ({type:DELETE_GROUP, id})
export const setGroupAC = (group) => ({type:SET_GROUP, group})
export default groupReducer;