import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import Dropdown from './logout_dropdown';

const mSTP = ({ session, entities: { users } }, ownProps) => {
    return {
        currentUser: users[session.id]
    };
};

const mDTP = dispatch => {
    return {
        logout: () => dispatch(logout())
    };
};

export default connect(mSTP, mDTP)(Dropdown);