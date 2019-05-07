import React from 'react';
import { Route, withRouter } from 'react-router-dom';

class ProjectShow extends React.Component {
    componentDidMount() {
        // console.log(this.props);
        this.props.requestSingleProject(this.props.match.params.projectId);
    }

    render() {
        const project = this.props.project;

        if (!project) return null;

        return (
            <div>
                <div className='project-name'>
                    {this.props.project.name}
                </div>
            </div>
            // <div>hello</div>
        );
    }
}

export default withRouter(ProjectShow);