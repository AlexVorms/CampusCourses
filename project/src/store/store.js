import newsReducer from './newsReducer';

let store = {
    _state: {
        newsPage: {
            news: [
                { id: 1, title: "First news", content: "First item content", likes: 2 },
                { id: 2, title: "Second news", content: "Second item content", likes: 4 },
                { id: 3, title: "Third news", content: "Third item content", likes: 223 },
                { id: 4, title: "Fourth news", content: "Fourth item content", likes: 12 }
            ],
            orderMessage: "Not ordered",
            newsAddData: {
                title : "",
                content : ""
            }
        }
    },
    _notifySubscriber() {
        console.log("Nobody subsribed")
    },
    dispatch(action) {
        console.log("dispatcher was called!");
        this._state.newsPage = newsReducer(this._state.newsPage, action);
        this._notifySubscriber();
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._notifySubscriber = observer;
    }
} 

window.store = store;
export default store;

