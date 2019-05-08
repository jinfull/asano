import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class EditDropdown extends React.Component {
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
        // debugger
        return (
            <div className="edit-dropdown">
                <button className='edit-dropdown-button' onClick={this.showDropdown}>
                    <div id='arrow-down' />
                </button>
                
                {this.state.displayDropdown ? ( this.props.openModal
                ) : (null)}
            </div>
        );
    }
}

export default withRouter(EditDropdown);