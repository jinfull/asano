import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';

import Greeting from '../greeting/greeting_container';

class Splash extends React.Component {
    render() {
        return (
            <Greeting />
        );
    }
}

export default Splash;