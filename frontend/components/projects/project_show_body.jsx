import React from 'react';
import { Link, Route, withRouter } from 'react-router-dom';

import TasksIndexContainer from '../tasks_index/tasks_index_container';
import TaskShowContainer from '../task_show/task_show_container';

class ProjectShowBody extends React.Component {
    componentDidMount() {
        // this.props.
    }

    render() {
        // debugger
        return (
            <div className='project-body-top'>
                <div className='project-body-container'>
                    <TasksIndexContainer />
                    <Route path='/projects/:projectId/tasks/:taskId' component={TaskShowContainer} />
                    {/* Can add another route here to edit */}
                </div>
            </div>
        )
    }
}

export default withRouter(ProjectShowBody);