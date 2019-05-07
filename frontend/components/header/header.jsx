import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import DropdownContainer from '../logout_dropdown/logout_dropdown_container';

const Header = (props) => {
    return (
        <div className='home-header-div'>
            <div id='home-text'>Home</div>
            <DropdownContainer />
        </div>
    )
}

export default withRouter(Header);