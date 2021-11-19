import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { ROUTES } from '../constants';
import Dashboard from '../containers/Dashboard';

const Routes: React.FC = () => {
    return(
        <Switch>
            <Route exact path={ ROUTES.CITIES } component={ Dashboard } />
            <Route path='*'>
                <Redirect to={ ROUTES.CITIES }/>
            </Route>
        </Switch>
    );
};

export default Routes;
