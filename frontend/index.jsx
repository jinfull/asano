import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import * as SessionsApiUtil from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
    window.postUser = SessionsApiUtil.postUser;
    window.postSession = SessionsApiUtil.postSession;
    window.deleteSession = SessionsApiUtil.deleteSession;

    const store = configureStore();
    const root = document.getElementById('root');
    ReactDOM.render(<h1>React is working!</h1>, root);
})