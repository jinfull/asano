import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import ProjectIndexTileItem from './project_index_tile_item';

class RecentProjects extends React.Component {
    componentDidMount() {
        this.props.requestProjects();
    }

    render() {
        const projects = this.props.projects.map(project => {
            return (
                <ProjectIndexTileItem
                    key={project.id}
                    project={project}
                />
            );
        });

        return (
            <div className='projects-tile-container'>
                <ul className='ul-grid-container'>
                    {projects}
                    {/* <li className='tile-item'>
                        <div className='tile-icon-wrapper' id='add-project-tile'>                        
                            <div>+</div>
                        </div>
                        <div className='tile-project-name'>Add Project</div>
                    </li> */}
                </ul>
            </div>
        )
    }
}

export default withRouter(RecentProjects);