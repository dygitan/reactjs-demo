import React, { Fragment } from 'react';
import { render } from 'react-dom';
import Menu from '@app/components/Menu';

const App = () => {
    return (
        <Fragment>
            <h3>Details Page</h3>
            <Menu />
        </Fragment>
    );
};

render(<App />, document.querySelector('#app'));
