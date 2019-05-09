import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import TasksIndex from './tasks_index';
import { selectTasksByProjectId } from '../../helpers/selectors';

import { createTask, fetchTasks } from '../../actions/task_actions';

const mSTP = (state, ownProps) => {
    return {
        // unusedTasks: Object.keys(state.entities.tasks).map(id => state.entities.tasks[id]),
        tasks: selectTasksByProjectId(state, ownProps.match.params.projectId),
        projectId: ownProps.match.params.projectId
    };
};

const mDTP = dispatch => {
    return {
        // fetchTasks: () => dispatch(fetchTasks()),
        createTask: (projectId, task) => dispatch(createTask(projectId, task))
    };
};

export default withRouter(connect(mSTP, mDTP)(TasksIndex));