import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => {
    return (
    <div className='header-group' id='login-signup-header'>
        <Link to='/login'>Login</Link>
        &nbsp;or&nbsp;
            <Link to='signup'>Sign Up!</Link>
    </div>
    )
};