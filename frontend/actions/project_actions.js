import * as ProjectsApiUtil from '../util/projects_api_util';

export const RECEIVE_PROJECTS = 'RECEIVE_PROJECTS';
export const RECEIVE_SINGLE_PROJECT = 'RECEIVE_SINGLE_PROJECT';
export const DELETE_PROJECT = 'DELETE_PROJECT';

const receiveProjects = projects => ({
    type: RECEIVE_PROJECTS,
    projects
});

const receiveProject = payload => ({
    type: RECEIVE_SINGLE_PROJECT,
    payload
});

const removeProject = projectId => ({
    type: DELETE_PROJECT,
    projectId    
});

export const requestProjects = () => dispatch => {
    return ProjectsApiUtil.fetchProjects()
        .then(projects => dispatch(receiveProjects(projects)));
};

export const requestSingleProject = (projectId) => dispatch => {
    return ProjectsApiUtil.fetchProject(projectId)
        .then(project => dispatch(receiveProject(project)));
};

export const createProject = (project) => dispatch => {
    return ProjectsApiUtil.createProject(project)
        .then(project => dispatch(receiveProject(project)));
};

export const updateProject = (project) => dispatch => {
    return ProjectsApiUtil.updateProject(project)
        .then(project => dispatch(receiveProject(project)));
};

export const deleteProject = (projectId) => dispatch => {
    return ProjectsApiUtil.deleteProject(projectId)
        .then(project => dispatch(removeProject(project)));
};