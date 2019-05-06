import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';

import Home from './home';

const mSTP = ({ session, entities: { users } }) => {
    return {
        currentUser: users[session.id]
    };
};

const mDTP = dispatch => {
    return {};
};

export default connect(mSTP, mDTP)(Home);