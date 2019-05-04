import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';

import Home from './home';

const mSTP = ({ errors }) => {
    // return {
    //     errors: errors.session,
    //     formType: 'log in',
    //     otherSessionPostType: <Link to="/signup">sign up</Link>
    // };
};

const mDTP = dispatch => {
    // return {
    //     processForm: (user) => dispatch(login(user))
    // };
};

export default connect(mSTP, mDTP)(Home);