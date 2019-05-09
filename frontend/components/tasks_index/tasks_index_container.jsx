import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import TasksIndex from './tasks_index';
import { selectTasksByProjectId } from '../../helpers/selectors';

import { createTask } from '../../actions/task_actions';

const mSTP = (state, ownProps) => {
    console.log(state);
    console.log(ownProps);
    return {
        tasks: selectTasksByProjectId(state, ownProps.match.params.projectId),
    };
};

const mDTP = dispatch => {
    return {
        createTask: (projectId, task) => dispatch(createTask(projectId, task))
    };
};

export default withRouter(connect(mSTP, mDTP)(TasksIndex));