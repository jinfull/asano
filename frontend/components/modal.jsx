import React from 'react';
import { connect } from 'react-redux';

import { closeModal } from '../actions/modal_actions';
import ProjectsPostModal from './project_post_modal/projects_modal';
import EditModal from './projects/edit-project-modal/edit_modal';
import DeleteProjectModalContainer from './projects/edit-project-modal/delete_modal_container';

function Modal({ modal, closeModal }) {

    if (!modal) {
        return null;
    }

    let component;

    switch (modal) {
        case '+':
            component = <ProjectsPostModal />;       
            break;
        case 'update':
            component = <EditModal />;
            break;
        case 'delete':
            component = <DeleteProjectModalContainer />;
            break;
        default:
            return null;
    }

    return (
        <div>
            {component}
        </div>
    );
}

const mapStateToProps = state => {

    return {
        modal: state.ui.modal.modalType
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
