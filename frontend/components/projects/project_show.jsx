import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import ProjectShowHeaderContainer from './project_show_header_container';
import ProjectShowBodyContainer from './project_show_body_container';

class ProjectShow extends React.Component {
    componentDidMount() {
        this.props.requestSingleProject(this.props.match.params.projectId);
    }

    render() {
        const project = this.props.project;

        if (!project) return null;

        return (
            <div className='project-show-phu'>
                    <ProjectShowHeaderContainer />
                    <ProjectShowBodyContainer />
            </div>
        );
    }
}

export default withRouter(ProjectShow);