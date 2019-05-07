import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
// import LoginFormContainer from '../session_form/login_form_container';
// import SignupFormContainer from '../session_form/signup_form_container';

function Modal({ modal, closeModal }) {
    if (!modal) {
        return null;
    }
    // let component;
    // switch (modal) {
    //     case 'login':
    //         component = <LoginFormContainer />;
    //         break;
    //     case 'signup':
    //         component = <SignupFormContainer />;
    //         break;
    //     default:
    //         return null;
    // }
    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                <div className='modal-top-level'>
                    <h1 className='create-project'>Create Project</h1>
                    <form>
                        <label className='project-form-label'>Name</label>
                        <input className='project-input' id='project-input-name' type='text' />

                        <label className='project-form-label'>Description</label>
                        <textarea className='project-input' />
                    </form>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    // debugger
    return {
        modal: state.ui.modal
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
