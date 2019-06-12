export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const openModal = (modalType, objectId) => {
    return {
        type: OPEN_MODAL,
        objectId: objectId,
        modalType: modalType,
    };
};

export const closeModal = () => {
    return {
        type: CLOSE_MODAL
    };
};
