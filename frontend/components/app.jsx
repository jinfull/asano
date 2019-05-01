import React from 'react';
import { Provider } from 'react-redux';

import { Route, 
    Redirect, 
    Switch, 
    Link, 
    HashRouter 
} from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';

const App = () => (
    <div>
        <h1>HELLO REACT IS WORKING VERY WELL RIGHT NOW!</h1>
        <GreetingContainer />
    </div>
);

export default App;