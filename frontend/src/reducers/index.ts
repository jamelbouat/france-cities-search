import { combineReducers, Reducer } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';

import { searchCitiesReducer } from './searchCitiesReducer';

const createRootReducer = (history: History): Reducer => combineReducers({
    router: connectRouter(history),
    searchCitiesState: searchCitiesReducer
});

export default createRootReducer;
