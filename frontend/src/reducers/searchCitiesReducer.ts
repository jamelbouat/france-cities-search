import { SEARCH_CITIES_FAILURE, SEARCH_CITIES_REQUEST, SEARCH_CITIES_SUCCESS } from '../actions/types';
import { ICitiesAction } from '../interfaces/actions';

const initialState = {
    isLoading: false,
    cities: []
};

export const searchCitiesReducer = (state = initialState, action: ICitiesAction) => {
    switch (action.type) {
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
