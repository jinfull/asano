import React from 'react';
import { connect } from 'react-redux';

import { closeModal } from '../actions/modal_actions';
import ProjectsPostModal from './project_post_modal/projects_modal';
import EditModal from './projects/edit-project-modal/edit_modal';

function Modal({ modal, closeModal }) {
    if (!modal) {
        return null;
    }

    let component;

    switch (modal) {
        case '+':
        // debugger
            component = <ProjectsPostModal />;       
            break;
        case 'update':
            component = <EditModal />;
            break;
        default:
            return null;
    }

    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
}

const mapStateToProps = state => {

    return {
        modal: state.ui.modal
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
