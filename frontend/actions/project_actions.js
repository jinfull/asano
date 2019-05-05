import * as ProjectsApiUtil from '../util/projects_api_util';

export const RECEIVE_PROJECTS = 'RECEIVE_PROJECTS';
export const RECEIVE_SINGLE_PROJECT = 'RECEIVE_SINGLE_PROJECT';

const receiveProjects = projects => ({
    type: RECEIVE_PROJECTS,
    projects
});

const receiveProject = project => ({
    type: RECEIVE_SINGLE_PROJECT,
    project
});

export const requestProjects = () => dispatch => {
    return ProjectsApiUtil.fetchProjects()
        .then(projects => dispatch(receiveProjects(projects)));
};

export const requestSingleProject = (projectId) => dispatch => {
    return ProjectsApiUtil.fetchProject(projectId)
        .then(project => dispatch(receiveProject(project)));
};