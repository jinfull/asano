import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';

import { logout } from '../../actions/session_actions';
import Header from './header';

const mSTP = ({ session, entities: { users } }, ownProps) => {
    console.log(ownProps);
    return {
        currentUser: users[session.id]
    };
};

const mDTP = dispatch => ({
    logout: () => dispatch(logout())
});

export default withRouter(connect(mSTP, mDTP)(Header));