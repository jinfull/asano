import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
// import LoginFormContainer from '../session_form/login_form_container';
// import SignupFormContainer from '../session_form/signup_form_container';

function Modal({ modal, closeModal }) {
    if (!modal) {
        return null;
    }

    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                <div className='modal-top-level'>
                    <h1 className='create-project'>Create Project</h1>
                    <form className='project-form-container'>
                        <div className='project-name-div'>
                            <label className='project-form-label' id='project-submit-name'>Name</label>
                            <br />
                            <input className='project-input' id='project-input-name' type='text' />
                            <br/>
                        </div>
                        <div className='project-description-div'>
                            <label className='project-form-label' id='project-submit-description'>Description</label>
                            <br />
                            <textarea className='project-input' />
                            <br />
                        </div>
                        <div className='button-row'>
                            <button className='create-project-submit'>Create Project</button>
                            <button className='modal-cancel' onClick={closeModal}>Cancel</button>
                        </div>
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
