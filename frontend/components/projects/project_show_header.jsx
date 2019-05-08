import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import DropdownContainer from '../logout_dropdown/logout_dropdown_container';
import EditDropdownContainer from '../projects/edit_project_dropdown_container';

const ProjectShowHeader = (props) => {
    let colorsArr = ['e362e3', 'ea4e9d', 'e8384f', 'e362e3', '7a6ff0', 'aa62e3', 'cdf22b', 'ffe572'];

    function sample(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    return (
        <div className='project-header-div'>
            <div className='project-header-info'>
                <div className='project-header-icon-wrapper' id={sample(colorsArr)}><div id='project-header-icon'></div></div>
                <div id='project-header-sub-div'>
                    <div id='project-header-name-row'>
                        <div id='project-header-name'>{props.project.name}</div>
                        <EditDropdownContainer projectId={props.project.id} />
                    </div>
                    <div id='project-header-description'>{props.project.description}</div>
                </div>
            </div>

            <DropdownContainer />
        </div>
    )
}

export default ProjectShowHeader;