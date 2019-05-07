import React from 'react';
import { Link } from 'react-router-dom';

const ProjectIndexItem = ({ project }) => {
    return (
        <Link to={`/projects/${project.id}`} className='sidebar-link'>
            <li className='sidebar-li'>
                {project.name}
            </li>
        </Link>
    )
}

export default ProjectIndexItem;