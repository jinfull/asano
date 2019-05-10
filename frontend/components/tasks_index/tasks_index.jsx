import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import TaskShowContainer from '../task_show/task_show_container';

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
    }

    // componentDidMount() {
    //     this.props.fetchTasks(this.props.projectId);
    // }

    // componentDidUpdate(prevProps) {
    //     // let id = this.props.match.params.projectId;
    //     // debugger
    //     if (prevProps.projectId !== this.props.projectId) {
    //         this.props.fetchTasks(this.props.projectId);
    //     }
    // }

    update(field) {
        return(e) => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const task = Object.assign({}, this.state);
        // debugger

        let newTask = this.props.createTask(this.props.projectId, task).then(() => {
            this.props.history.push(`/projects/${this.props.projectId}/tasks/${task.id}`);
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

        // const fetchedTasks = this.props.fetchedTasks.map(task => {
        //     return(
        //         <div key={task.id} className='div-li-container'>
        //             <li key={task.id} className='task-li-item'>
        //                 {task.name}
        //             </li>
        //         </div>
        //     )
        // })

        // let tasks = this.props.tasks;

        // if (!tasks) return null;

        let tasks = this.props.tasks.map(task => {
            // debugger
            return (
                <div key={task.id} className='div-li-container'>
                    <Link to={`/projects/${task.project_id}/tasks/${task.id}`} className='link-to-task-show'>
                        <li key={task.id} className='task-li-item'>{task.name}</li>
                    </Link>
                </div>
            )
        })

        return (
            <div className='tasks-index-container'>
                <div className='tasks-index-header'>
                    {/* <TaskShowContainer /> */}

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