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