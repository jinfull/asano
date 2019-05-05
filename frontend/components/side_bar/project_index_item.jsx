import React from 'react';
import { Link } from 'react-router-dom';

const ProjectIndexItem = ({ project }) => {
    return (
        <li>
            {project.name}
        </li>
    )
}

export default ProjectIndexItem;