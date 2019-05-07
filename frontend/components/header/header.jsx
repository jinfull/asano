import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Header = (props) => {
    console.log(props);
    const currentInitials = props.currentUser.first_name[0] + props.currentUser.last_name[0];

    const personalGreeting = () => (
        <hgroup className='home-header-group'>
            <Link to='/login'><button className='home-header-logout' onClick={props.logout}>{currentInitials.toUpperCase()}</button></Link>
        </hgroup>
    );


    
    return (
        <div className='home-header-div'>
            <div id='home-text'>Home</div>
            <div>{personalGreeting()}</div>
        </div>
    )
}

export default withRouter(Header);