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
        this.handleDemoSubmit = this.handleDemoSubmit.bind(this);
        this.demoLogin = this.demoLogin.bind(this);
    }

    update(field) {
        return(e) => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        // this.state.email = $('#email-login').val();
        // this.state.password = $('#password-login').val();

        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    handleDemoSubmit(e) {
        e.preventDefault();

        let demoEmail = 'jinfull2@gmail.com'.split('');
        let demoPass = 'jinfull'.split('');

        this.setState({
            email: this.state.email,
            password: this.state.password,
        }, () => this.demoLogin(demoEmail, demoPass));

        setTimeout(() => { this.handleSubmit(e) }, 2500);
    }

    demoLogin(email, password) {
        if (email.length > 0) {
            this.setState({ email: this.state.email += email.shift() },
                () => window.setTimeout(() => this.demoLogin(email, password), 60));
        } else if (password.length > 0) {
            this.setState({ password: this.state.password += password.shift() },
                () => window.setTimeout(() => this.demoLogin(email, password), 70));
        } else if (email.length === 0 && password.length === 0) {
            this.demoLogin(this.state.email, this.state.password);
        }
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

    
    render() {
        let nameInputs = null;
        let demoLoginButton = null;

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
            demoLoginButton = 
                <button className='session-submit' id='demo-login' onClick={(e) => this.handleDemoSubmit(e)}>
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
                            {demoLoginButton}
                            <input className='session-submit' id='session-submit' type='submit' value={this.props.formType} />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default withRouter(SessionForm);