import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import TasksIndexContainer from '../tasks_index/tasks_index_container';

class ProjectShowBody extends React.Component {
    render() {
        return (
            <div className='project-body-top'>
                <div className='project-body-container'>
                    <TasksIndexContainer />
                </div>
            </div>
        )
    }
}

export default withRouter(ProjectShowBody);