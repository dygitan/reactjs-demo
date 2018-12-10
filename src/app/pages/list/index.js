import React, { Fragment } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import Menu from '@app/components/Menu';
import ListView from './ListView';

import store from '@app/store';

const App = () => {
    return (
        <Fragment>
            <Provider store={store}>
                <h3>List Page</h3>
                <ListView />
                <Menu />
            </Provider>
        </Fragment>
    );
};

render(<App />, document.querySelector('#app'));
