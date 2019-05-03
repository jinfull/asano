import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';

import Greeting from '../greeting/greeting_container';

class Splash extends React.Component {
    render() {
        return (
            <div className='splash-top'>
                <div className='splash-second'>
                    <h1 id="splash-h1">Make more time for the work that matters most</h1>
                    <h2 id="splash-h2">Asano is the work management platform teams use to stay focused on the goals, projects, and daily tasks that grow business.</h2>
                </div>
            </div>
        );
    }
}

export default Splash;