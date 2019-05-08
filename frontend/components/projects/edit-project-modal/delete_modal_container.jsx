import { connect } from 'react-redux';

import DeleteProjectModal from './delete_modal';

import { deleteProject } from '../../../actions/project_actions';
import { closeModal } from '../../../actions/modal_actions';

const mSTP = (state, ownProps) => {
    return {
        modal: state.ui.modal.modalType,
        project: state.entities.projects[state.ui.modal.projectId]
    };
};

const mDTP = dispatch => {
    return {
        closeModal: () => dispatch(closeModal()),
        deleteProject: projectId => dispatch(deleteProject(projectId))
    };
};

export default connect(mSTP, mDTP)(DeleteProjectModal);