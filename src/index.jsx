// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import { logger } from 'redux-logger';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';
import messageReducer from './reducers/message_reducer';
import selectedChannelReducer from './reducers/selected_channel_reducer';

// State and reducers
const identityReducer = (state = null) => state;

const middlewares = applyMiddleware(reduxPromise, logger);

const initialState = {
  messages: [],
  channels: ['general', 'react', 'paris'],
  selectedChannel: "general",
  currentUsername: window.prompt("Who are you", "username"),
};

const reducers = combineReducers({
  messages: messageReducer,
  channel: identityReducer,
  selectedChannel: selectedChannelReducer,
  currentUsername: identityReducer
});

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, {}, middlewares)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
