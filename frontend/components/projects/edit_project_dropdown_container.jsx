import React from 'react';
import { connect } from 'react-redux';

import { updateProject } from '../../actions/project_actions';
import EditDropdown from './edit_project_dropdown';
import { openModal, closeModal } from '../../actions/modal_actions';

const mDTP = dispatch => {
    return {
        openModal: (modalType, projectId) => { dispatch(openModal(modalType, projectId)) },
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(null, mDTP)(EditDropdown);