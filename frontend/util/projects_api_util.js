export const fetchProjects = () => {
    return $.ajax({
        method: 'get',
        url: '/api/projects'
    });
};

export const fetchProject = id => {
    return $.ajax({
        method: 'get',
        url: `/api/projects/${id}`
    });
};

export const createProject = project => {
    return $.ajax({
        method: 'post',
        url: 'api/projects',
        data: { project }
    });
};

export const updateProject = project => {
    return $.ajax({
        method: 'patch',
        url: `/api/projects/${project.id}`,
        data: { project }
    });
};