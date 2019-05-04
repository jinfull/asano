import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SideBar extends React.Component {



    render() {
        return (
            <div className='side-bar-top'>
                <Link to='/'><div className='sidebar-logo'></div></Link>
            </div>
        )
    }
}

export default withRouter(SideBar);