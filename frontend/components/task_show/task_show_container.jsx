import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import TaskShow from './task_show';
import { fetchTask, updateTask, deleteTask } from '../../actions/task_actions';

const mSTP = (state, ownProps) => {
    const task = state.entities.tasks[ownProps.match.params.taskId];
    return {
        task
    };
};

const mDTP = dispatch => {
    return {
        fetchTask: (taskId) => dispatch(fetchTask(taskId)),
        updateTask: (task) => dispatch(updateTask(task)),
        deleteTask: (taskId) => dispatch(deleteTask(taskId))
    };
};

export default connect(mSTP, mDTP)(TaskShow);