
const DELETE_GROUP = 'DELETE_GROUP';
const SET_GROUP = 'SET_GROUP';

let initialState = {
    group: [
        {
          id: "b785b820-10ec-4450-8449-08db2e8f03b3",
          name: "Психология"
        },
        {
          id: "5c74b5ba-da9e-423c-844a-08db2e8f03b3",
          name: "Иностранные языки"
        },
        {
          id: "3fe78a26-83e1-4170-844c-08db2e8f03b3",
          name: "Программирование"
        },
        {
          id: "466a37b3-2acf-4f4f-aed3-08db31fd15b0",
          name: "Философия"
        }
      ]
};

const groupReducer = (state = initialState, action) =>{
    switch(action.type){
        case DELETE_GROUP:
            return {
                ...state,
                group: state.group.map(group => {
                    if (group.id !== action.id) {
                        return group;
                    }
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