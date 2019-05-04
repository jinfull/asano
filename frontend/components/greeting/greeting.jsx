import React from 'react';
import { Link } from 'react-router-dom';
// import sessionLinks from '../header/header_session';


const Greeting = ({ currentUser, logout }) => {
    const sessionLinks = () => (
        <div className='header-group' id='login-signup-header'>
            <Link to='/login'>Login</Link>
            &nbsp;or&nbsp;
            <Link to='signup'>Sign Up!</Link>            
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
            <Link to='/'><div className='logo'></div></Link>
            <div>{currentUser ? personalGreeting() : sessionLinks()}</div>
        </div>
    )
}

export default Greeting;