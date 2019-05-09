export const fetchTasks = () => {
    return $.ajax({
        method: 'get',
        url: '/api/tasks'
    });
};

export const fetchTask = (taskId) => {
    return $.ajax({
        method: 'get',
        url: `/api/tasks/${taskId}`
    });
};

export const createTask = (projectId, task) => {
    return $.ajax({
        method: 'post',
        url: `/api/projects/${projectId}/tasks`,
        data: { task }
    });
};

export const updateTask = (task) => {
    return $.ajax({
        method: 'patch',
        url: `api/tasks/${task.id}`,
        data: { task }
    });
};

export const deleteTask = (taskId) => {
    return $.ajax({
        method: 'delete',
        url: `/api/tasks/${taskId}`
    });
};