import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import TasksIndex from './tasks_index';

// import {} from '../../actions/'

const mSTP = (state, ownProps) => {
    return {};
};

const mDTP = dispatch => {
    return {

    };
};

export default withRouter(connect(mSTP, mDTP)(TasksIndex));