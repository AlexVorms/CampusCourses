import * as axios from 'axios';
const instance = axios.create({
    baseURL : 'https://sas.front.kreosoft.space/api/'
});

function getNews() {
    return instance.get('News')
        .then(response => {
            if (response.status === 200) {
                return response.data;
            }
        })
        .catch(error => {
            console.log(error.response.data.error);
        });
}

function addNews(title, content){
    return instance.post('News', {
        title,
        content,
        tags: "tag1, tag2",
        date : "01/01/2021"
    })
    .then(response => {
        return response.status
    })
    .catch(error => {
        console.log(error.response.data.error);
    });
}

function setLike(id){
    return instance.post('News/like', {
        id
    })
    .then(response => {
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

