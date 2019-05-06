import React from 'react';
import { Provider } from 'react-redux';

import Routes from './shared/routes';

import { Route, 
    Redirect, 
    Switch, 
    Link, 
    HashRouter 
} from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';

const App = () => (
    <div className='app-div'>
        <Routes />
    </div>
);

export default App;
