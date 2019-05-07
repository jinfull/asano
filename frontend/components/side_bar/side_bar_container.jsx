import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import SideBar from './side_bar';
import { requestProjects } from '../../actions/project_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const mSTP = (state, ownProps) => ({
    projects: Object.keys(state.entities.projects).map(id => state.entities.projects[id])
});

const mDTP = dispatch => ({
    requestProjects: () => dispatch(requestProjects()),
    openModal: (
        <button id='plus-project' onClick={() => dispatch(openModal('+'))}>
            +
        </button>
    ),
    closeModal: () => dispatch(closeModal())
});

export default connect(mSTP, mDTP)(SideBar);