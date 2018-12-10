import React, { Fragment } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import Menu from '@app/components/Menu';
import DetailsView from './DetailsView';

import store from '@app/store';

const App = () => {
    return (
        <Fragment>
            <Provider store={store}>
                <h3>Details Page</h3>
                <DetailsView />
                <Menu />
            </Provider>
        </Fragment>
    );
};

render(<App />, document.querySelector('#app'));
