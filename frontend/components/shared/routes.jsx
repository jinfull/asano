import { connect } from 'react-redux';
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LoginFormContainer from '../session_form/login_form_container';
import SignupFormContainer from '../session_form/signup_form_container';
import GreetingContainer from '../greeting/greeting_container';
import Splash from '../splash/splash';
import Home from '../home/home';
import SideBar from '../side_bar/side_bar_container';

const mSTP = (state) => {
    return {
        loggedIn: !!state.session.id
    };
};

const selectRoutes = loggedIn => {
    if (loggedIn) {
        return (
            <>
                <SideBar />
                <GreetingContainer />
                <Route path='/home' component={Home} />
            </>
        )
    } else {
        return (
            <>
                {/* <Route path='/login' component={LoginFormContainer} /> */}
                <Switch>
                    <Route path='/login' component={LoginFormContainer} />
                    <Route path='/signup/:email' component={SignupFormContainer} />
                    <Route path='/signup' component={SignupFormContainer} />
                    <Route path='/' component={Splash} />
                </Switch>
                {/* <Route path='/login' component={LoginFormContainer} /> */}
            </>
        )
    }
}

const Routes = ({ loggedIn }) => {
    const routes = selectRoutes(loggedIn)

    return (
        <div className="my-class">
            { routes }
        </div>
    )
}

export default connect(mSTP)(Routes);