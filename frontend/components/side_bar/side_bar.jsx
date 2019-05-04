import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SideBar extends React.Component {



    render() {
        return (
            <div className='side-bar-container'>
                <Link to='/' className='side-bar-logo'></Link>
                <div>second div</div>
            </div>
        )
    }
}

export default withRouter(SideBar);