import React from 'react';
import { connect } from 'react-redux';

import RecentProjects from './recent_projects';
import { requestProjects } from '../../actions/project_actions';


const mSTP = (state, ownProps) => {
    return {projects: Object.keys(state.entities.projects).map(id => state.entities.projects[id])};
};

const mDTP = dispatch => ({
    requestProjects: () => dispatch(requestProjects())
});

export default connect(mSTP, mDTP)(RecentProjects);