import React from 'react';
import { withRouter } from 'react-router-dom';

class TasksIndex extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        // this.props.fetchTasks();
    }

    handleSubmit(e) {
        e.preventDefault();

        const task = Object.assign({}, this.state);

        // this.props.createTask()
    }
    
    render() {
        // const tasks = this.props.tasks
        // debugger

        const tasks = this.props.tasks.map(task => {
            return (
                <li>{task.name}</li>
            )
        })

        return (
            <div className='tasks-index-container'>
                <div className='tasks-index-header'>
                    <form className='new-task-form' onSubmit={this.handleSubmit}>
                        <input
                            type='text'
                        />
                        <button>This is my button yepee</button>
                    </form>
                </div>          
                <div>
                    <ul>
                        { tasks }    
                    </ul>    
                </div>      
            </div>
        )
    }
}

export default withRouter(TasksIndex);