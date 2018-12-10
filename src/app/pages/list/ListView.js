import React, { Component } from 'react';

class ListView extends Component {
    render() {
        const { items = [] } = this.props;

        if (items.length === 0) {
            return <p>No item(s) to display</p>;
        }

        return (
            <ul>
                {items.map(item => {
                    return <li>{`${item.last_name}, ${item.first_name}`}</li>;
                })}
            </ul>
        );
    }
}

export default ListView;
