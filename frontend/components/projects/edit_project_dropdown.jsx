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
        return (
            <div className="edit-dropdown">
                <button className='edit-dropdown-button' onClick={this.showDropdown}>
                    <div id='arrow-down' />
                </button>
                
                {this.state.displayDropdown ? ( 
                    <ul className='dropdown-list'>
                        <li>
                            <button className='dropdown-project' onClick={() => this.props.openModal('update', this.props.projectId)}>
                                Edit Project
                            </button>
                        </li>
                        <li>
                            <button className='dropdown-project' id='delete-project'>
                                Delete Project
                            </button>
                        </li>
                    </ul>
                ) : (null)}
            </div>
        );
    }
}

export default withRouter(EditDropdown);