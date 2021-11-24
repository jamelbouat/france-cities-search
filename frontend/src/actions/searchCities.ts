import { Dispatch } from 'redux';

import { SEARCH_CITIES_FAILURE, SEARCH_CITIES_REQUEST, SEARCH_CITIES_SUCCESS, SEARCH_TEXT_CHANGE } from './types';
import { ICity } from '../interfaces/city';
import { searchCitiesService } from '../services';

const searchCities = (searchText: string) => async (dispatch: Dispatch): Promise<void> => {
    dispatch(searchCitiesRequest());

    try {
        const cities = await searchCitiesService.searchCities(searchText);
        dispatch(searchCitiesSuccess(cities));
        dispatch(searchTextChange(searchText));
    } catch (error) {
        dispatch(searchCitiesFailure());
    }
};

const searchTextChange = (searchText: string) => ({
    type: SEARCH_TEXT_CHANGE,
    payload: {
        searchText
    }
});

const searchCitiesRequest = () => ({
    type: SEARCH_CITIES_REQUEST
});

const searchCitiesSuccess = (cities: ICity[]) => ({
    type: SEARCH_CITIES_SUCCESS,
    payload: {
        cities
    }
});

const searchCitiesFailure = () => ({
    type: SEARCH_CITIES_FAILURE
});

export default searchCities;
