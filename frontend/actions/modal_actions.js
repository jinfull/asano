export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const openModal = (modalType, projectId) => {
    return {
        type: OPEN_MODAL,
        projectId: projectId,
        modalType: modalType,
    };
};

export const closeModal = () => {
    return {
        type: CLOSE_MODAL
    };
};
