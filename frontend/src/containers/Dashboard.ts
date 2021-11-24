import { Action } from 'redux';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { RouteComponentProps } from 'react-router-dom';

import { RootState } from '../interfaces/state';
import searchCities from '../actions/searchCities';
import {
    citiesDOMTOMSelector,
    citiesMetropolitanSelector,
    isLoadingSelector,
    searchTextSelector
} from '../selectors/searchCities';
import Dashboard from '../components/Dashboard';
import { routeChange } from '../actions/routes';
import { ROUTES } from '../constants';
import { throttleQuery } from '../utils/throttle';

const mapStateToProps = (state: RootState) => ({
    isLoading: isLoadingSelector(state),
    searchText: searchTextSelector(state),
    citiesDOMTOMSelector: citiesDOMTOMSelector(state),
    citiesMetropolitanSelector: citiesMetropolitanSelector(state)
});

const mapDispatchToProps = (dispatch: ThunkDispatch<RootState, any, Action>, ownProps: RouteComponentProps) => {
    const { search: queryString } = ownProps.location;

    return {
        searchCities: async (searchText: string) => {
            await throttleQuery( () => dispatch(searchCities(searchText)), 1000);
        },
        updateSearchParams: (searchText: string) => {
            dispatch(
                routeChange(
                    ROUTES.CITIES,
                    undefined,
                    queryString,
                    { search: searchText }
                )
            );
        }
    };
};

export default connect(
    mapStateToProps, mapDispatchToProps
)(Dashboard);
