import React from 'react';
import { withRouter } from 'react-router-dom';
import Typed from 'typed.js';
// sourced from 
// Matt Boldt: https://mattboldt.com/demos/typed-js/

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            first_name: '',
            last_name: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemoClick = this.handleDemoClick.bind(this);
    }

    update(field) {
        return(e) => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.state.email = $('#email-login').val();
        this.state.password = $('#password-login').val();

        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    handleDemoClick(e) {
        e.preventDefault();

        const demoEmail = {
            strings: ["jinfull2@gmail.com"],
            typeSpeed: 35,
            onComplete: (self) => {
                const passwordLogin = new Typed("#password-login", demoPass);
            }
        }
        const demoPass = {
            strings: ["jinfull"],
            typeSpeed: 35,
            onComplete: (self) => {
                setTimeout(() => {this.handleSubmit(e)}, 500);
            }
        }

        const emailLogin = new Typed("#email-login", demoEmail);
    }
    
    render() {
        let nameInputs = null;
        let demoLogin = null;

        if (this.props.formType === 'sign up') {
            nameInputs = 
                <div className="name-inputs-label">
                    <label className="session-label">First Name
                        <input
                            type='text'
                            value={this.state.first_name}
                            onChange={this.update('first_name')}
                            className="session-input"
                        />
                    </label>

                    <label className="session-label">Last Name
                        <input
                            type='text'
                            value={this.state.last_name}
                            onChange={this.update('last_name')}
                            className="session-input"
                        />
                    </label>
                </div>
        } else {
            demoLogin = 
                <button className='session-submit' id='demo-login' onClick={(e) => this.handleDemoClick(e)}>
                    demo login
                </button>
        }

        return (
            <div className='login-form-container'>
                <div id='centered-session-div'>
                    <form onSubmit={this.handleSubmit} className='login-form-box'>
                        <br/>

                        Please {this.props.formType} or {this.props.otherSessionPostType}.
                        <br/>

                        <div className='login-form'>
                            <br/>

                            <label className="session-label">Email Address
                                <input 
                                    type='text'
                                    value={this.state.email}
                                    onChange={this.update('email')}
                                    className="session-input"
                                    id="email-login"
                                />
                            </label>

                            {nameInputs}
                            
                            <label className="session-label">Password
                                <input
                                    type='password'
                                    value={this.state.password}
                                    onChange={this.update('password')}
                                    className="session-input"
                                    id="password-login"
                                />
                            </label>
                            <br/>
                        </div>                
                        {this.renderErrors()}
                        <br />

                        <div className='session-submit-row'>
                            {demoLogin}
                            <input className='session-submit' id='session-submit' type='submit' value={this.props.formType} />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default withRouter(SessionForm);