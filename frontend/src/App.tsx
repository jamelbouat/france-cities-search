import React from 'react';
import { hot } from 'react-hot-loader/root';
import { makeStyles } from '@material-ui/core';

import Routes from './routes';

const useStyles = makeStyles(() => ({
    layout: {
        display: 'flex',
        flexFlow: 'column',
        height: '100vh'
    },
    main: {
        flex: '1 1 auto',
        overflow: 'hidden'
    }
}));

const App = () => {
    const classes = useStyles();

    return (
        <div className={ classes.layout }>
            <div className={ classes.main }>
                <Routes />
            </div>
        </div>
    );
};

export default hot(App);
