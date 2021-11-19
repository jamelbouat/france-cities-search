import { Action } from 'redux';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import { RootState } from '../interfaces/state';
import searchCities from '../actions/searchCities';
import { citiesDOMTOMSelector, citiesMetropolitanSelector } from '../selectors/cities';
import Dashboard from '../components/Dashboard';

const mapStateToProps = (state: RootState) => ({
    isLoading: state.searchCitiesState.isLoading,
    citiesDOMTOMSelector: citiesDOMTOMSelector(state),
    citiesMetropolitanSelector: citiesMetropolitanSelector(state),
});

const mapDispatchToProps = (dispatch: ThunkDispatch<RootState, any, Action>) => ({
    searchCities: async (searchText: string) => {
        await dispatch(searchCities(searchText));
    }
});

export default connect(
    mapStateToProps, mapDispatchToProps
)(Dashboard);
