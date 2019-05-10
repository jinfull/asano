import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// import { selectTasksByProjectId } from '../../helpers/selectors';
import ProjectShowBody from './project_show_body';

const mSTP = (state, ownProps) => {
\    // const task = state.entities.tasks[ownProps.match.params.taskId];

    return {

    };
};

const mDTP = dispatch => {
    return {

    };
};

export default connect(mSTP, mDTP)(ProjectShowBody);