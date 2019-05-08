import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { closeModal } from '../../actions/modal_actions';
import { createProject } from '../../actions/project_actions';


class ProjectsPostModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: '',
            owner_id: '1',
            team_id: '1'
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    } 

    update(field) {
        return(e) => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        
        const project = Object.assign({}, this.state);

        this.props.createProject(project).then(() => {
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
        if (!this.props.modal) return null;

        return (
            <div className="modal-background" onClick={this.props.closeModal}>
                <div className="modal-child" onClick={e => e.stopPropagation()}>
                    <div className='modal-top-level'>
                        <h1 className='create-project'>Create Project</h1>
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
                                <br/>
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
                                <button className='create-project-submit'>Create Project</button>
                                <button className='modal-cancel' onClick={this.props.closeModal}>Cancel</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        modal: state.ui.modal
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal()),
        createProject: project => dispatch(createProject(project))
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProjectsPostModal));
