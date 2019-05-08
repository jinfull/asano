import React from 'react';
import { connect } from 'react-redux';

import { updateProject } from '../../actions/project_actions';
import EditDropdown from './edit_project_dropdown';
import { openModal, closeModal } from '../../actions/modal_actions';

const mSTP = (state, ownProps) => {
    return {

    };
};

const mDTP = dispatch => {
    return {
        openModal: (
            <button className='dropdown-project' onClick={() => dispatch(openModal('update'))}>
                Edit Projectx
            </button>
        ),
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(null, mDTP)(EditDropdown);