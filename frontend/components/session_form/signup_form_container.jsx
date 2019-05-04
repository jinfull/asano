import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';

import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const mSTP = (state, ownProps) => {
    return {
        errors: state.errors.session,
        formType: 'sign up',
        otherSessionPostType: <Link to="/login">log in</Link>
    };
};

const mDTP = dispatch => {
    return {
        processForm: (user) => dispatch(signup(user))
    };
};

export default connect(mSTP, mDTP)(SessionForm);