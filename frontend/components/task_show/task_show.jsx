import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class TaskShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // debugger
        this.props.fetchTask(this.props.match.params.taskId);
    }
    
    render() {
        // debugger
        const task = this.props.task;

        if (!task) return null;

        return (
            <div className='task-show-top'>
                <div>{task.name}</div>
            </div>
        )
    }
}

export default TaskShow;