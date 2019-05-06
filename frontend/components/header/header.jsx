import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ currentUser, logout }) => {
    const currentInitials = currentUser.first_name[0] + currentUser.last_name[0];

    const personalGreeting = () => (
        <hgroup className='home-header-group'>
            <Link to='/login'><button className='home-header-logout' onClick={logout}>{currentInitials.toUpperCase()}</button></Link>
        </hgroup>
    );

    return (
        <div className='home-header-div'>
            <div id='home-text'>Home</div>
            <div>{personalGreeting()}</div>
        </div>
    )
}

export default Header;