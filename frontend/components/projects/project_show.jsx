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
            <>
                <ProjectShowHeaderContainer />
                <ProjectShowBodyContainer />
            </>
        );
    }
}

export default withRouter(ProjectShow);