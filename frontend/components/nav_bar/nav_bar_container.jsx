import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import NavBar from './nav_bar';

const mSTP = (state, ownProps) => {
    return {};
};

const mDTP = dispatch => {
    return {};
};

export default connect(mSTP, mDTP)(NavBar);