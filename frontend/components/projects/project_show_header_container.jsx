import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import ProjectShowHeader from './project_show_header';
import { logout } from '../../actions/session_actions';

const mSTP = (state, ownProps) => {
    const project = state.entities.projects[ownProps.match.params.projectId];
    // debugger
    return {
        project
    };
};

// const mDTP = dispatch => ({

// });

export default withRouter(connect(mSTP)(ProjectShowHeader));