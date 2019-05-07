import { connect } from 'react-redux';

import ProjectShow from './project_show';
import { requestSingleProject } from '../../actions/project_actions';

const mSTP = (state, ownProps) => {
    const project = state.entities.projects[ownProps.match.params.projectId];

    return {
        project: project
    };
};

const mDTP = dispatch => {
    return {
        requestSingleProject: (projectId) => dispatch(requestSingleProject(projectId))
    }
};

export default connect(mSTP, mDTP)(ProjectShow);