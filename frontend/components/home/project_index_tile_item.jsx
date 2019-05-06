import React from 'react';
import { Link } from 'react-router-dom';

const ProjectIndexTileItem = ({ project }) => {
    let colorsArr = ['e362e3', 'ea4e9d', 'e8384f', 'e362e3', '7a6ff0', 'aa62e3', 'cdf22b', 'ffe572'];

    function sample(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    return (
        // <Link to='/'>
            <li className='tile-item'>
                <Link to='/home' className='tile-link'>
                <div className='tile-icon-wrapper-wrapper'>
                    <div className='tile-icon-wrapper' id={sample(colorsArr)} key={ project.id }>
                        <div className='tile-icon'></div>
                    </div>
                </div>
                <div className='tile-project-name'>{project.name}</div>
                </Link>
            </li>
    )
}

export default ProjectIndexTileItem;