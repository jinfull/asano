import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import ProjectIndexItem from './project_index_item';

class SideBar extends React.Component {
    componentDidMount() {
        this.props.requestProjects();
    }

    render() {
        const projects = this.props.projects.map(project => {
            return (
                <ProjectIndexItem
                    key={project.id}
                    project={project}
                />
            );
        });

        return (
            <div className='side-bar-container'>
                <div className='side-bar-contents-container'>
                    <Link to='/' className='side-bar-logo'></Link>
                    <ul>
                        {projects}
                    </ul>
                </div>
            </div>
        )
    }
}

export default withRouter(SideBar);