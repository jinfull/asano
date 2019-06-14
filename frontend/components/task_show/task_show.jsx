import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class TaskShow extends React.Component {
    constructor(props) {
        super(props);
        // this.state = this.props.task;
        this.state = { completed: false };
        this.updateCompleted = this.updateCompleted.bind(this);
    }

    componentDidMount() {
        this.props.fetchTask(this.props.match.params.taskId);
    }

    updateCompleted(value) {
        // console.log(this.props.task);
        // console.log(this.state);

        this.setState({ completed: value });

        let taskCopy = Object.assign({}, this.props.task);
        taskCopy.completed = this.state.completed;

        this.props.updateTask(taskCopy);
    }
    
    render() {
        const task = this.props.task;
        let initials;

        if (!task) return null;

        const markComplete = () => {
            return (
            <button id="task-mark-complete-button" onClick={() => this.updateCompleted(true)}>
                <svg className="check-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M504.5 75.5c-10-10-26.2-10-36.2 0L161.6 382.2 43.7 264.3c-10-10-26.2-10-36.2 0 -10 10-10 26.2 0 36.2l136 136c10 10 26.2 10 36.2 0L504.5 111.7C514.5 101.7 514.5 85.5 504.5 75.5z" /></svg>
                Mark Complete
            </button>
        )}

        const completed = () => {
            return (
            <button id="task-completed-button" onClick={() => this.updateCompleted(false)}>
                <svg className="check-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M504.5 75.5c-10-10-26.2-10-36.2 0L161.6 382.2 43.7 264.3c-10-10-26.2-10-36.2 0 -10 10-10 26.2 0 36.2l136 136c10 10 26.2 10 36.2 0L504.5 111.7C514.5 101.7 514.5 85.5 504.5 75.5z" /></svg>
                Completed!
            </button>
        )}

        // console.log(task);

        if (task.assignee.split(" ").length === 0) {
            initials = "";
        } else if (task.assignee.split(" ").length === 1) {
            initials = `${task.assignee.split(" ")[0].slice(0, 2).toUpperCase()}`;
        } else {
            initials = task.assignee.split(" ")[0][0].toUpperCase() + task.assignee.split(" ")[1][0].toUpperCase();
        }

        return (
            <div className='task-show-top'>
                <div id="task-show-mark-complete">
                    {(task.completed) ? completed() : markComplete()}
                    {/* <button id="task-mark-complete-button">
                        <svg className="mark-complete-check-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M504.5 75.5c-10-10-26.2-10-36.2 0L161.6 382.2 43.7 264.3c-10-10-26.2-10-36.2 0 -10 10-10 26.2 0 36.2l136 136c10 10 26.2 10 36.2 0L504.5 111.7C514.5 101.7 514.5 85.5 504.5 75.5z" /></svg>
                        Mark Complete
                    </button> */}
                </div>
                <div id="task-show-header">
                    <div id='task-show-name'>{task.name}</div>
                    <div id='edit-delete-task'>
                        <div id='edit-task' onClick={() => this.props.openModal('update-task', task.id)}></div>
                        <div id='delete-task' onClick={() => this.props.deleteTask(task.id)}></div>
                    </div>
                </div>
                <div className='task-show-row-one'>
                    <div className='task-show-grouping' id="assigned-to">
                        <div className='task-show-circle' id='task-show-circle-initials'>{initials}</div>
                        <div className='task-show-col'>
                            <div className='task-show-label'>Assigned To</div>
                            <div id='task-show-assignee'>{task.assignee}</div>
                        </div>
                    </div>
                    <div className='task-show-grouping'>
                        <div className='task-show-circle' id='calendar-icon'></div>
                        <div className='task-show-col'>
                            <div className='task-show-label'>Due Date</div>
                            <div id='task-show-due-date'>{task.due_date}</div>
                        </div>
                    </div>
                </div>

                <div id='task-show-description'>{task.description}</div>
            </div>
        )
    }
}

export default TaskShow;