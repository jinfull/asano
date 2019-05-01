import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';

import { login } from '../../actions/session_actions';
import SessionForm from './session_form';

const mSTP = ({ errors }) => {
    return { 
        errors: errors.session,
        formType: 'log in',
        otherSessionPostType: <Link to="/signup">sign up</Link>
    };
};

const mDTP = dispatch => {
    return {
        processForm: (user) => dispatch(login(user))
    };
};

export default connect(mSTP, mDTP)(SessionForm);