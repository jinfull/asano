import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Dropdown extends React.Component {
    constructor(props) {
        super(props);

        this.state = { displayDropdown: false };

        this.showDropdown = this.showDropdown.bind(this);
        this.hideDropdown = this.hideDropdown.bind(this);
    };

    showDropdown() {
        this.setState({ displayDropdown: true }, () => {
            document.addEventListener('click', this.hideDropdown);
        });
    }

    hideDropdown() {
        this.setState({ displayDropdown: false }, () => {
            document.removeEventListener('click', this.hideDropdown);
        });

    }

    render() {
        const currentInitials = this.props.currentUser.first_name[0] + this.props.currentUser.last_name[0];

        return (
            <div className="dropdown">
                <button className='home-header-logout' onClick={this.showDropdown}>
                    {currentInitials.toUpperCase()}
                </button>

                { this.state.displayDropdown ? (
                    <button onClick={this.props.logout} className='logout-dropdown'>
                        Logout
                    </button>
                ) : ( null ) }
            </div>
        );
    }
}

export default withRouter(Dropdown);