import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import WebPage from './components/WebPage';
import {createStore } from 'redux';
import allReducer from './reducers';

const store = createStore(allReducer);
ReactDOM.render(
    <Provider store={store}>
    <WebPage/>
    </Provider>,
    document.getElementById('root')
);
