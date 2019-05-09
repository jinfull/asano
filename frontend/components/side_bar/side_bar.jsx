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
            <div className='side-bar-wrapper'>
                <div className='side-bar-container'>

                    <div className='side-bar-contents-container'>
                        <Link to='/home' className='side-bar-logo'></Link>
                        <Link to='/home' className='side-bar-home-main'>
                            <div className='side-bar-home-logo'></div>
                            <div className='side-bar-home'>Home</div>
                        </Link>
                        <div className='marketing-main-div'>
                            <div className='marketing-team'>Marketing Team</div>
                            {this.props.openModal}
                        </div>
                        <div className='circle-container'>
                            <div className='circle-sidebar' id='circle-one'>JJ</div>
                            <div className='circle-sidebar' id='circle-two'>AS</div>
                            <div className='circle-sidebar' id='circle-three'>GH</div>
                        </div>
                        <ul className='side-bar-projects'>
                            {projects}
                        </ul>
                    </div>                
                </div>
            </div>
        )
    }
}

export default withRouter(SideBar);