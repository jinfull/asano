import * as TasksApiUtil from '../util/tasks_api_util';

export const RECEIVE_TASKS = 'RECEIVE_TASKS';
export const RECEIVE_SINGLE_TASK = 'RECEIVE_SINGLE_TASK';
export const REMOVE_TASK = 'DELETE_TASK';

const receiveTasks = tasks => ({
    type: RECEIVE_TASKS,
    tasks
});

const receiveSingleTask = task => ({
    type: RECEIVE_SINGLE_TASK,
    task
});

const removeTask = taskId => ({
    type: REMOVE_TASK,
    taskId
});

export const fetchTasks = () => dispatch => {
    return TasksApiUtil.fetchTasks()
        .then(tasks => dispatch(receiveTasks(tasks)));
};

export const fetchTask = (taskId) => dispatch => {
    return TasksApiUtil.fetchTask(taskId)
        .then(task => dispatch(receiveSingleTask(task)));
};

export const createTask = (task) => dispatch => {
    return TasksApiUtil.createTask(task)
        .then(task => dispatch(receiveSingleTask(task)));
};

export const updateTask = (task) => dispatch => {
    return TasksApiUtil.updateTask(task)
        .then(task => dispatch(receiveSingleTask(task)));
};

export const deleteTask = (taskId) => dispatch => {
    return TasksApiUtil.deleteTask(task)
        .then(task => dispatch(removeTask(task)));
};