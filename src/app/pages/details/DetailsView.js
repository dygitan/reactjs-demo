import React, { Component } from 'react';
import Connector from './connector';

@Connector
export default class DetailsView extends Component {
    componentDidMount() {
        const pathArray = window.location.pathname.split('/');
        this.props.getUserById(pathArray[pathArray.length - 1]);
    }

    render() {
        if (this.props.isLoading) {
            return <p>Loading.... please wait!</p>;
        }

        const { avatar, last_name, first_name } = this.props.user;
        return (
            <div>
                <img src={avatar} />
                <p>{`${last_name}, ${first_name}`}</p>
            </div>
        );
    }
}
