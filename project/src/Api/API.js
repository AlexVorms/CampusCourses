import * as axios from 'axios';

const instance = axios.create({
    baseURL : 'https://camp-courses.api.kreosoft.space/'
});


function login(email, password){
    return instance.post('login', {
        email,
        password,
    })
    .then(response => {
        console.log(response);
        return response.status
    })
    .catch(error => {
        console.log(error.response.data.error);
    });
}


export const newsAPI = {
    getNews: getNews,
    addNews: addNews,
    setLike: setLike
};

