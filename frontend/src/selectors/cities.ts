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

export {
    citiesSelector,
    citiesDOMTOMSelector,
    citiesMetropolitanSelector
};
