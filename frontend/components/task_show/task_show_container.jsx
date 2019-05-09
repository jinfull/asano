import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import TaskShow from './task_show';

const mSTP = (state, ownProps) => {
    const task = state.entities.tasks[ownProps.match.params.taskId];
    
    return {
        task
    };
};

const mDTP = dispatch => {
    return {
        fetchTask: (taskId) => dispatch(fetchTask(taskId)),
        updateTask: (task) => dispatch(updateTask(task))
    };
};

export default connect(mSTP, mDTP)(TaskShow);