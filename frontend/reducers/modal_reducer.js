import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_actions';

const initState = {
    modalType: null,
    objectId: null,
}

export default function modalReducer(state = initState, action) {
    switch (action.type) {
        case OPEN_MODAL:
            return {
                ...state,
                modalType: action.modalType,
                objectId: action.objectId
            }
        case CLOSE_MODAL:
            return {
                ...state,
                modalType: null,
                objectId: null
            };
        default:
            return state;
    }
}