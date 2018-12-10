import React, { Component } from 'react';
import uniqid from 'uniqid';

import Connector from './connector';

@Connector
export default class ListView extends Component {
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
