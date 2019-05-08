import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
    const sessionLinks = () => (
        <div className='header-group' id='login-signup-header'>
            <Link to='/login' id="login-greeting">Log In</Link>
            &nbsp;&nbsp;
            <Link to='/signup'><button id='try-free-greeting'>Try for free</button></Link>            
        </div>
    );
        
    const personalGreeting = () => (
        <hgroup className='header-group'>
            <h2 className='header-name'>Hi, {currentUser.first_name}!</h2>
            <Link to='/login'><button className='header-logout' onClick={logout}>Log Out</button></Link>
        </hgroup>
    );

    return (
        <div className='header-div'>
            <Link to='/' className='logo'><div></div></Link>
            <div>{currentUser ? personalGreeting() : sessionLinks()}</div>
        </div>
    )
}

export default Greeting;