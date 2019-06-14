import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class TaskShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchTask(this.props.match.params.taskId);
    }
    
    render() {
        const task = this.props.task;
        let initials;

        console.log(task);

        if (!task) return null;


        if (task.assignee.split(" ").length === 0) {
            initials = "";
        } else if (task.assignee.split(" ").length === 1) {
            initials = `${task.assignee.split(" ")[0].slice(0, 2).toUpperCase()}`;
        } else {
            initials = task.assignee.split(" ")[0][0].toUpperCase() + task.assignee.split(" ")[1][0].toUpperCase();
        }

        return (
            <div className='task-show-top'>
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