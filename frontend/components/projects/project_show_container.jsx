import { connect } from 'react-redux';

import ProjectShow from './project_show';
import { requestSingleProject } from '../../actions/project_actions';

const mSTP = (state, ownProps) => {
    const project = state.entities.projects[ownProps.match.params.projectId];

    // debugger
    return ({
        project: project
        // will need to add tasks in here as part of the tasks mvp
    });
};

const mDTP = dispatch => {
    return {
        requestSingleProject: (projectId) => dispatch(requestSingleProject(projectId))
    }
};

export default connect(mSTP, mDTP)(ProjectShow);