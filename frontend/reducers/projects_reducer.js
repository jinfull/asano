import merge from 'lodash/merge';
import {
    RECEIVE_PROJECTS,
    RECEIVE_SINGLE_PROJECT,
    DELETE_PROJECT,
} from '../actions/project_actions';
import {
    LOGOUT_CURRENT_USER
} from '../actions/session_actions';

const projectsReducer = (state = {}, action) => {
    Object.freeze(state);
    
    switch(action.type) {
        case RECEIVE_PROJECTS:
            return merge({}, state, action.projects);
        case RECEIVE_SINGLE_PROJECT:
            return merge({}, state, { [action.project.id]: action.project });
        case DELETE_PROJECT: 
            let newState = merge({}, state);
            delete newState[action.projectId];
            return newState;
        case LOGOUT_CURRENT_USER:
            return {};
        default: 
            return state;
    }
};

export default projectsReducer;