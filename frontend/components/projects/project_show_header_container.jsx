import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import ProjectShowHeader from './project_show_header';
import { logout } from '../../actions/session_actions';

const mSTP = (state, ownProps) => {
    const project = state.entities.projects[ownProps.match.params.projectId];
    
    return {
        project
    };
};

export default withRouter(connect(mSTP)(ProjectShowHeader));