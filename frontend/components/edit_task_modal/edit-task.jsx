import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import DatePicker from 'react-datepicker';

import { updateTask } from '../../actions/task_actions';
import { closeModal } from '../../actions/modal_actions';

class EditTaskModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.task;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // componentDidMount() {
  //   this.props.fetchTask(this.props.task.id);
  // }

  update(field) {
    debugger
    return (e) => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    const task = Object.assign({}, this.state);

    console.log(this.props);
    console.log(this.state);

    this.props.updateTask(task).then(() => {
      this.props.history.push(`/projects/${this.state.project_id}/tasks/${this.state.id}`);
      this.setState({
        name: '',
        due_date: '',
        assignee_id: '',
        description: ''
      });
      this.props.closeModal();
    });
  }


  render() {
    if (!this.props.modal) return null;

    return (
      <div className="modal-background" onClick={this.props.closeModal}>
        <div className="modal-child" id="edit-task-modal" onClick={e => e.stopPropagation()}>
          <div className='modal-top-level'>
            <h1 className='create-project'>Edit Task</h1>
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

              <div className="edit-task-modal-mid-row">




                <div className='project-name-div' id="edit-due-date">
                  <label className='project-form-label' id='project-submit-name'>Due Date</label>
                  <br />
                  <DatePicker
                    // selected={this.state.startDate}
                    // onChange={this.handleChange}
                    onSelect={this.handleSelect} 
                    type='date'
                    className='task-input'
                    id='project-input-name'
                    value={this.state.due_date}
                    onChange={this.update('due_date')}
                  />
                  <br />
                </div>



                <div className='project-name-div' id="edit-assignee">
                  <label className='project-form-label' id='project-submit-name'>Assignee</label>
                  <br />
                  <input
                    type='text'
                    className='task-input'
                    id='project-input-name'
                    value={this.state.assignee_id}
                    onChange={this.update('assignee_id')}
                  />
                  <br />
                </div>
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
                <button className='create-project-submit'>Edit Task</button>
                <button className='modal-cancel' onClick={this.props.closeModal}>Cancel</button>
              </div>

            </form>
          </div>
        </div>
      </div>
    )
  }
}

const mSTP = (state, ownProps) => {
  return {
    modal: state.ui.modal.modalType,
    task: state.entities.tasks[state.ui.modal.objectId]
  };
};

const mDTP = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
    // fetchTask: taskId => dispatch(fetchTask(taskId)),
    updateTask: task => dispatch(updateTask(task))
  };
};


export default withRouter(connect(mSTP, mDTP)(EditTaskModal));