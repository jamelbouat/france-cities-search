import { Selector } from 'react-redux';

import { RootState } from '../interfaces/state';
import { ICity } from '../interfaces/city';

const citiesSelector: Selector<RootState, ICity[]> = (state) =>
    state.searchCitiesState.cities;

const citiesDOMTOMSelector: Selector<RootState, ICity[]> = (state) => {
    const cities = citiesSelector(state);
    return cities.filter(city => city.codePostal.slice(0, 2) === '97');
};

const citiesMetropolitanSelector: Selector<RootState, ICity[]> = (state) => {
    const cities = citiesSelector(state);
    return cities.filter(city => city.codePostal.slice(0, 2) !== '97');
};

const isLoadingSelector: Selector<RootState, boolean> = (state) => {
    return state.searchCitiesState.isLoading;
};

const searchTextSelector: Selector<RootState, string> = (state) => {
    return state.searchCitiesState.searchText;
};

export {
    citiesSelector,
    citiesDOMTOMSelector,
    citiesMetropolitanSelector,
    isLoadingSelector,
    searchTextSelector
};
