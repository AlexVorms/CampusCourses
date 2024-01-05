import {instance} from "./axios"

const getGroups = () => {
    return instance.get("groups")
        .then(response => response.data)
        .catch(error => error.response);
} 

const deleteGroup = (id) =>{
    return instance.delete('/groups/' + id)
    .then(response =>{
        return response;
      })
      .catch(error => error.response);
}

const createGroup = (name) =>{
    return instance.post('/groups', {
        name
    })
    .then(response =>{
        return response;
      })
      .catch(error => error.response);
}

const editGroup = (name, id) =>{
    return instance.put('/groups/' + id, {
        name
    })
    .then(response =>{
        return response;
      })
    .catch(error => error.response);
}

export const GroupApi = {
    getGroups: getGroups,
    deleteGroup: deleteGroup,
    createGroup: createGroup,
    editGroup: editGroup,
}