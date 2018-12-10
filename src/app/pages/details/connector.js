import { connect } from 'react-redux';
import userActions from '@app/actions/users';

const mapStateToProps = state => {
    return {
        ...state.restReducer,
        user: state.usersReducer.user
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getUserById: id => dispatch(userActions.getUserById(id))
    };
};

export default function Connector(Component) {
    return connect(
        mapStateToProps,
        mapDispatchToProps
    )(Component);
}
