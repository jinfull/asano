import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { closeModal } from '../../actions/modal_actions';

class EditTaskModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.task;
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  // componentDidMount() {
  //   this.props.fetchTask(this.props.task.id);
  // }

  update(field) {
    return (e) => this.setState({
      [field]: e.currentTarget.value
    });
  }

  // handleSubmit(e) { 
  //   e.preventDefault();

  //   const task = Object.assign({}, this.state);

  //   this.props.updateTask(task).then(() => {
  //     this.props.history.push('/#');
  //     this.setState({
  //       name: '',
  //       description: '',

  //     });
  //   });
  // }


  render() {
    if (!this.props.modal) return null;

    return (
      <div className="modal-background" onClick={this.props.closeModal}>
        <div className="modal-child" onClick={e => e.stopPropagation()}>
          <div className='modal-top-level'>
            <h1 className='create-project'>Edit Task</h1>
            <form className='project-form-container' onSubmit={this.handleSubmit}>


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
  console.log(state);
  return {
    modal: state.ui.modal.modalType,
    task: state.entities.projects[state.ui.modal.taskId]
  };
};

const mDTP = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
    fetchTask: taskId => dispatch(fetchTask(taskId)),
    updateTask: task => dispatch(updateTask(task))
  };
};


export default connect(mSTP, mDTP)(EditTaskModal);