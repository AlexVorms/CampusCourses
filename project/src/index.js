import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
//import store from './store/store.js'
import store from './store/redux-store';
import { Provider } from 'react-redux';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
      <App store={store}/>
  </Provider>,
);

