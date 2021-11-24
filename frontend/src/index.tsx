import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { CssBaseline, ThemeProvider } from '@material-ui/core';

import App from './App';
import theme from './mainTheme';
import { history, configureStore } from './configureStore';
import { saveStateToSessionStorage } from './utils/sessionStorage';
import { throttleSaveToStorage } from './utils/throttle';

export const store = configureStore();
store.subscribe(() => throttleSaveToStorage(() => saveStateToSessionStorage(store.getState()),300));

ReactDOM.render(
    <ThemeProvider theme={ theme }>
        <CssBaseline />
        <Provider store={ store }>
            <ConnectedRouter history={ history }>
                <App />
            </ConnectedRouter>
        </Provider>
    </ThemeProvider>,
    document.getElementById('root')
);
