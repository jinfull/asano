import React from 'react';
import { withRouter } from 'react-router-dom';

class DeleteProjectModal extends React.Component {
    constructor(props) {
        super(props);
        // this.state = this.props.project;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        this.props.deleteProject(this.props.project.id)
            .then(() => {
                this.props.history.push('/home');
                this.props.closeModal();
            });
    }

    render() {
        return (
            <div className="modal-background" onClick={this.props.closeModal}>
                <div className="delete-modal-child" onClick={e => e.stopPropagation()}>
                    <div className='delete-modal-top'>
                        <h1 className='create-project'>Delete Project</h1>
                        <div className='delete-confirmation-msg'>Are you sure you want to delete this project? This action cannot be undone.</div>
                        <form onSubmit={this.handleSubmit}>
                            <div className='button-row' id='delete-button-row'>
                                <button className='create-project-submit' id='delete-project-button'>Delete Project</button> 
                                <button className='modal-cancel' onClick={this.props.closeModal}>Cancel</button> 
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}


export default withRouter(DeleteProjectModal);