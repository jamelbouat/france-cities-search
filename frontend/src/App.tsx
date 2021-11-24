import React from 'react';
import { hot } from 'react-hot-loader/root';

import Routes from './routes';

const App = () => {
    return (
        <div>
            <Routes />
        </div>
    );
};

export default hot(App);
