// import React from 'react';
// import { connect } from 'react-redux';

// import EditModal from './edit_modal';

// import { closeModal } from '../../../actions/modal_actions';
// import { requestSingleProject, updateProject } from '../../../actions/project_actions';


// const mapStateToProps = (state, ownProps) => {
//     // debugger
//     return {
//         modal: state.ui.modal,
//         project: state.entities.projects[ownProps.match.params.id]
//     };
// };

// const mapDispatchToProps = dispatch => {
//     return {
//         closeModal: () => dispatch(closeModal()),
//         requestSingleProject: projectId => dispatch(requestSingleProject(projectId)),
//         updateProject: project => dispatch(updateProject(project))
//     };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(EditModal);