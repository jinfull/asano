import React from 'react';
import ReactDOM from 'react-dom';
import { Link, withRouter } from 'react-router-dom';
import SignUpContainer from '../session_form/signup_form_container';


import GreetingContainer from '../greeting/greeting_container';

class Splash extends React.Component {
    constructor(props) {
        // console.log(props);
        super(props);
        this.state = {
            email: '',
            first_name: '',
            last_name: '',
            password: ''
        };
        this.update = this.update.bind(this);
    }


    update(email) {
        return(e) => this.setState({
            [email]: e.currentTarget.value
        });
    }

    render() {
        return (
            <>
                <GreetingContainer />
                <div className='splash-top'>
                    <div className='splash-second'>
                        <h1 id="splash-h1">Make more time for the work that matters most</h1>
                        <h2 id="splash-h2">Asano is the work management platform teams use to stay focused on the goals, projects, and daily tasks that grow business.</h2>
                        <div className='splash-form'>
                            <input id='splash-started-input' type="text" onChange={this.update('email')} placeholder='name@company.com' />
                            <Link to={`/signup/${this.state.email}`}>
                                <button id='splash-started-button'>Try for free</button>
                            </Link>
                        </div>
                        <div id='splash-img'></div>
                    </div>
                </div>
            </>
        );
    }

}

export default Splash;