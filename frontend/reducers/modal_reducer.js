import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_actions';

const initState = {
    modalType: null,
    projectId: null,
}

export default function modalReducer(state = initState, action) {
    switch (action.type) {
        case OPEN_MODAL:
            return {
                ...state,
                modalType: action.modalType,
                projectId: action.projectId
            }
        case CLOSE_MODAL:
            return {
                ...state,
                modalType: null,
                projectId: null
            };
        default:
            return state;
    }
}