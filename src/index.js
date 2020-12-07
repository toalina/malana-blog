import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'

import rootReducer from './reducers';
import { getPosts } from './actions';

import App from './components/App';

import './stylesheets/index.scss';

// we create store and dispatch getPosts right away when app loads 
const store = createStore(rootReducer, applyMiddleware(thunk, logger));  
store.dispatch(getPosts()); 

ReactDOM.render(
  <Provider store={store}>                                               
    <App />
  </Provider>, 
  document.getElementById('root')
);