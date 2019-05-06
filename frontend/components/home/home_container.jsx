import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';

import Home from './home';

const mSTP = ({ session, entities: { users } }) => {
    debugger
    return {
        currentUser: users[session.id]
    };
};

const mDTP = dispatch => {
    // return {
    //     processForm: (user) => dispatch(login(user))
    // };
};

export default connect(mSTP, mDTP)(Home);