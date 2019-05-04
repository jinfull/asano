import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
    const sessionLinks = () => (
        <div className='home-header-group' id='home-login-signup-header'>
            <Link to='/login'>Login</Link>
            &nbsp;or&nbsp;
            <Link to='signup'>Sign Up!</Link>
        </div>
    );

    const personalGreeting = () => (
        <hgroup className='home-header-group'>
            <h2 className='home-header-name'>Hi, {currentUser.first_name}!</h2>
            <Link to='/login'><button className='home-header-logout' onClick={logout}>Log Out</button></Link>
        </hgroup>
    );

    return (
        <div className='home-header-div'>
            <div className={'logo'}><Link to='/'></Link></div>
            <div>{currentUser ? personalGreeting() : sessionLinks()}</div>
        </div>
    )
}

export default Greeting;