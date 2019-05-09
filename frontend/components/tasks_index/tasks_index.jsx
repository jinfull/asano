import React from 'react';
import { withRouter } from 'react-router-dom';

class TasksIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            completed: true,
            description: '',
            assignee_id: '',
            due_date: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.someFunction = this.someFunction.bind(this);
        this.someFunction();
    }

    someFunction() {
        // this.props.fetchTasks();
        this.setState({ state: this.state });
    }

    update(field) {
        return(e) => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        // if (!unusedTasks) return;
        const task = Object.assign({}, this.state);
        // debugger

        this.props.createTask(this.props.projectId, task).then(() => {
            this.props.history.push(`/projects/${this.props.projectId}`);
            this.setState({
                name: '',
                completed: 'true',
                description: '',
                assignee_id: '',
                due_date: ''
            });
        });
    }
    
    render() {
        const tasks = this.props.tasks.map(task => {
            return (
                <div key={task.id} className='div-li-container'>
                    <li key={task.id} className='task-li-item'>{task.name}</li>
                </div>
            )
        })

        // this.someFunction();

        return (
            <div className='tasks-index-container'>
                <div className='tasks-index-header'>
                    <form className='new-task-form' onSubmit={this.handleSubmit}>
                        <input
                            className='new-task-input'
                            type='text'
                            value={this.state.name} 
                            onChange={this.update('name')}
                        />
                        <button className='new-task-button'>Add Task</button>
                    </form>
                </div>          
                <div className='task-index-ul-container'>
                    <ul className='task-index-ul'>
                        { tasks }    
                    </ul>    
                </div>      
            </div>
        )
    }
}

export default withRouter(TasksIndex);