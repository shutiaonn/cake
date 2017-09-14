import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {createStore, combineReducers} from 'redux'
import {Provider} from 'react-redux'

import reducerObj from './reducers/index'
//创建reducers
const reducers = combineReducers(reducerObj);

//创建store
const store = createStore(reducers);

const renderPage = () => {
	ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
}

renderPage();
//订阅
store.subscribe(renderPage)


registerServiceWorker();
