import {
    SEARCH_CITIES_FAILURE,
    SEARCH_CITIES_REQUEST,
    SEARCH_CITIES_SUCCESS,
    SEARCH_TEXT_CHANGE
} from '../actions/types';
import { ICitiesAction } from '../interfaces/actions';

const initialState = {
    isLoading: false,
    searchText: '',
    cities: []
};

export const searchCitiesReducer = (state = initialState, action: ICitiesAction) => {
    switch (action.type) {
        case SEARCH_TEXT_CHANGE:
            return {
                ...state,
                searchText: action.payload.searchText
            };

        case SEARCH_CITIES_REQUEST:
            return {
                ...state,
                isLoading: true
            };

        case SEARCH_CITIES_SUCCESS:
            return {
                isLoading: false,
                cities: action.payload.cities
            };

        case SEARCH_CITIES_FAILURE:
            return {
                ...initialState
            };

        default:
            return state;
    }
};
