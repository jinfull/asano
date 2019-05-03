import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';

class Splash extends React.Component {
    componentDidMount() {}

    render() {
        return (
            <div className="splash">
                <h1>
                    Make more time for the work that matters most
                </h1>
            </div>
        )
    }
}

export default withRouter(Splash);