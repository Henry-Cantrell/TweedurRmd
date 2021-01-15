import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App';
import { createStore } from 'redux'
import { masterReducer } from './store/reducers/masterreducer'
import { Provider } from 'react-redux'
import firebase from 'firebase'

const store = createStore(
    masterReducer,
    //Redux FireFox devtools prerequisite code
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

var firebaseConfig = {
    apiKey: "AIzaSyBddRU8aVCJtrSckgpJv0rPKDYMQG-RVRk",
    authDomain: "tweedur-rv.firebaseapp.com",
    databaseURL: "https://tweedur-rv-default-rtdb.firebaseio.com",
    projectId: "tweedur-rv",
    storageBucket: "tweedur-rv.appspot.com",
    messagingSenderId: "655090615016",
    appId: "1:655090615016:web:dfa73ac0f77e9dc4617f5d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root"));