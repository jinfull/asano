import React from 'react';
import { Link } from 'react-router-dom';
// import logo from './logo.png';


const Greeting = ({ currentUser, logout }) => {
    const sessionLinks = () => (
        <nav className='header-group'>
            <Link to='/login'>Login</Link>
            &nbsp;or&nbsp;
            <Link to='signup'>Sign Up!</Link>            
        </nav>
    );
        
    const personalGreeting = () => (
        <hgroup className='header-group'>
            <h2 className='header-name'>Hi, {currentUser.first_name}!</h2>
            <button className='header-button' onClick={logout}>Log Out</button>
        </hgroup>
    );

    
    return (
        <div>
            {/* <img src={logo} /> */}
            <div className='header-logo'>mylogo</div>
            <div>{currentUser ? personalGreeting() : sessionLinks()}</div>
        </div>
    )
    
}

export default Greeting;