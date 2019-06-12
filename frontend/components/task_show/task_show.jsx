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

        if (!task) return null;

        // console.log(task.id);

        return (
            <div className='task-show-top'>
                <div id="task-show-header">
                    <div id='task-show-name'>{task.name}</div>
                    <div id='delete-task' onClick={() => this.props.deleteTask(task.id)}></div>
                </div>
                <div className='task-show-row-one'>
                    <div className='task-show-grouping'>
                        <div className='task-show-circle' id='task-show-circle-initials'>JJ</div>
                        <div className='task-show-col'>
                            <div className='task-show-label'>Assigned To</div>
                            <div id='task-show-assignee'>{task.assignee_id}</div>
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