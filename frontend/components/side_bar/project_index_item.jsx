import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const ProjectIndexItem = ({ project }) => {
    return (
        <Link to={`/projects/${project.id}`} className='sidebar-link'>
            <li className='sidebar-li'>
                <div id='sidebar-project-row'>
                    <div id='bullet-icon'></div>
                    <div id='sidebar-project-name'>
                        {project.name}
                    </div>
                </div>
            </li>
        </Link>
    )
}

export default ProjectIndexItem;