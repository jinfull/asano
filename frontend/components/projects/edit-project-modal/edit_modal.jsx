import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { closeModal } from '../../../actions/modal_actions';
import { requestSingleProject, updateProject } from '../../../actions/project_actions';

class EditModal extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     project: null
        // };

        this.state = this.props.project;

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        // debugger
        this.props.requestSingleProject(this.props.projectId)
    }

    update(field) {
        return (e) => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        const project = Object.assign({}, this.state);

        this.props.updateProject(project).then(() => {
            this.props.history.push('/home');
            this.setState({
                name: '',
                description: '',
                owner_id: '1',
                team_id: '1'
            });
            this.props.closeModal();
        });
    }


    render() {
        // debugger
        // console.log(this.state.project);
        if (!this.props.modal) return null;
        // above working to some extent

        // if (!this.props.project) return null;
        // console.log(this.props.project);

        return ( 
            <div className="modal-background" onClick={this.props.closeModal}>
                <div className="modal-child" onClick={e => e.stopPropagation()}>
                    <div className='modal-top-level'>
                        <h1 className='create-project'>Edit Project</h1>
                        <form className='project-form-container' onSubmit={this.handleSubmit}>

                            <div className='project-name-div'>
                                <label className='project-form-label' id='project-submit-name'>Name</label>
                                <br />
                                <input
                                    className='project-input'
                                    id='project-input-name'
                                    type='text'
                                    value={this.state.name}
                                    onChange={this.update('name')}
                                />
                                <br />
                            </div>

                            <div className='project-description-div'>
                                <label className='project-form-label' id='project-submit-description'>Description</label>
                                <br />
                                <textarea
                                    className='project-input'
                                    value={this.state.description}
                                    onChange={this.update('description')}
                                />
                                <br />
                            </div>

                            <div className='button-row'>
                                <button className='create-project-submit'>Edit Project</button>
                                <button className='modal-cancel' onClick={this.props.closeModal}>Cancel</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log(state.ui.modal)

    return {
        modal: state.ui.modal.modalType,
        // projectId: state.ui.modal.projectId,
        project: state.entities.projects[state.ui.modal.projectId],
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal()),
        requestSingleProject: projectId => dispatch(requestSingleProject(projectId)),
        updateProject: project => dispatch(updateProject(project))
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditModal));