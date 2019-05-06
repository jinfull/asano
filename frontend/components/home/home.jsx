import React from 'react';
import { withRouter } from 'react-router-dom';

const Home = (props) => {
    // debugger
    return (
        <div className='home-main-div'>
            <div id='home-image'></div>
            {/* <div id="home-welcome">Welcome to Asana {currentUser.first_name}!</div> */}
        </div>
    )
}

export default withRouter(Home);