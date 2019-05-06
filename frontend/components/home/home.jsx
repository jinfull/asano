import React from 'react';
import { withRouter } from 'react-router-dom';
import RecentProjectsContainer from './recent_projects_container';

const Home = (props) => {
    // debugger
    return (
            <div className='home-main-div'>
                <div id='home-image'></div>
                <div id="home-welcome">Welcome to Asano, {props.currentUser.first_name}.</div>
                <div id='home-intro'>Check out any upcoming tasks and recent projects below!</div>

                <div className='home-section-header'>
                    <div className='home-section-head' id='tasks-due'>Tasks Due Soon</div>
                </div>

                <div id='no-tasks-due'>No tasks due in the next five days</div>
                
                <div className='home-section-header'>
                    <div className='home-section-head' id='home-recent-projects'>Recent Projects</div>
                </div>

                <RecentProjectsContainer />
            </div> 
    )
}

export default withRouter(Home);