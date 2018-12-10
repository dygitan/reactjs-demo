import React, { Fragment } from 'react';
import { render } from 'react-dom';

import Menu from '@app/components/Menu';
import ListView from './ListView';

const App = () => {
    return (
        <Fragment>
            <h3>List Page</h3>
            <ListView />
            <Menu />
        </Fragment>
    );
};

render(<App />, document.querySelector('#app'));
