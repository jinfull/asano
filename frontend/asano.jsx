import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';
import Root from './components/root';
import { signup, login, logout } from './actions/session_actions';
// import * as SessionApiUtil from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
    let store;
    if (window.currentUser) {
        const preloadedState = {
            session: { id: window.currentUser.id },
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            }
        };

        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    // window.getState = store.getState;
    // window.dispatch = store.dispatch;

    // window.signup = signup;
    // window.login = login;
    // window.logout = logout;


    // window.signup = SessionApiUtil.signup;
    // window.login = SessionApiUtil.login;
    // window.logout = SessionApiUtil.logout;


    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);
})