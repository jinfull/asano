import React from 'react';
import { Link } from 'react-router-dom';

const ProjectIndexItem = ({ project }) => {
    return (
        <li className='sidebar-li'>
            <Link to={`/projects/${project.id}`} className='sidebar-link'>
                {project.name}
            </Link>
        </li>
    )
}

export default ProjectIndexItem;