import merge from 'lodash/merge';
import {
    RECEIVE_TASKS,
    RECEIVE_SINGLE_TASK,
    REMOVE_TASK
} from '../actions/task_actions';

const tasksReducer = (state = {}, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_TASKS:
            return merge({}, state, action.tasks);
        case RECEIVE_SINGLE_TASK:
            return merge({}, state, { [action.task.id]: action.task });
        case REMOVE_TASK:
            let newState = merge({}, state);
            delete newState[action.taskId];
            return newState;
        default:
            return state;
    }
};

export default tasksReducer;