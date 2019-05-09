export const selectTasksByProjectId = (state, projectId) => {
    return Object.values(state.entities.tasks).filter(task => task.project_id == projectId);
};