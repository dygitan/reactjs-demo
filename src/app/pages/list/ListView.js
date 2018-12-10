import React, { Component } from 'react';
import { connect } from 'react-redux';
import uniqid from 'uniqid';

import userActions from '@app/actions/users';

class ListView extends Component {
    componentDidMount() {
        this.props.getUsers();
    }

    render() {
        const { hasError, isLoading, items = [] } = this.props;

        if (isLoading) {
            return <p>Loading.... please wait!</p>;
        }

        if (hasError) {
            return (
                <p>
                    <strong>Whoops!</strong> Something went wrong. Please try again
                </p>
            );
        }

        if (items.length === 0) {
            return <p>No item(s) to display</p>;
        }

        return (
            <ul>
                {items.map(item => {
                    return <li key={uniqid()}>{`${item.last_name}, ${item.first_name}`}</li>;
                })}
            </ul>
        );
    }
}

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

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListView);
