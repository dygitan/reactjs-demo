import { connect } from 'react-redux';
import userActions from '@app/actions/users';

const mapStateToProps = state => {
    return {
        ...state.restReducer,
        items: state.usersReducer.users
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getUsers: () => dispatch(userActions.getUsers())
    };
};

export default function Connector(name) {
    return connect(
        mapStateToProps,
        mapDispatchToProps
    )(name);
}
