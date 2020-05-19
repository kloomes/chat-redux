// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { messagesReducer } from './reducers/messages_reducer';
import { channelsReducer } from './reducers/channels_reducer';
import { selectedChannelReducer } from './reducers/selected_channel_reducer';
import { currentUserReducer } from './reducers/current_user_reducer';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';

// State and reducers

const initialState = {
  messages: [],
  channels: ["general", "london", "ruby"],
  selectedChannel: "general",
  currentUser: prompt("What is your username?")
};

const reducers = combineReducers({
  messages: messagesReducer,
  channels: channelsReducer,
  selectedChannel: selectedChannelReducer,
  currentUser: currentUserReducer
});

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
