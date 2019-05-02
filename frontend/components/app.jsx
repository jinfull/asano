import React from 'react';
import { Provider } from 'react-redux';

import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import { Route, 
    Redirect, 
    Switch, 
    Link, 
    HashRouter 
} from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';

const App = () => (
    <div className='top-level-div'>
        <div>
            <header>
                <GreetingContainer />
            </header>

            <AuthRoute path='/login' component={LoginFormContainer} />
            <AuthRoute path='/signup' component={SignupFormContainer} />
        </div>
    </div>
);

export default App;