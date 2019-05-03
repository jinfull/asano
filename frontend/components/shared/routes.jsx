import { connect } from 'react-redux';
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LoginFormContainer from '../session_form/login_form_container';
import SignupFormContainer from '../session_form/signup_form_container';
import Splash from '../splash/splash';

const mSTP = (state) => {
    return {
        loggedIn: !!state.session.id
    };
};

const selectRoutes = loggedIn => {
    if (loggedIn) {
        return <Switch>
            <Route path='/' component={Splash} />
        </Switch>
    } else {
        return <Switch>
            <Route path='/login' component={LoginFormContainer} />
            <Route path='/signup' component={SignupFormContainer} />
            <Route path='/' component={Splash} />
        </Switch>
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