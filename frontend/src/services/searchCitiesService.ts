import { fetchApi } from './fetchApi';
import { ICity } from '../interfaces/city';

const searchCitiesPathname = process.env.REACT_APP_API_SEARCH_CITIES || '';

const searchCities = async (searchText: string): Promise<ICity[]>  => {
    const queryString = `?search=${ searchText }`;

    try {
        const data = await fetchApi(searchCitiesPathname + queryString, 'GET', undefined, undefined);
        return data.cities;
    } catch (error) {
        throw error;
    }
};

export const searchCitiesService = {
    searchCities
};
