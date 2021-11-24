import { Action } from 'redux';
import { ICity } from './city';

export interface ICitiesAction extends Action {
    payload: {
        cities: ICity[];
        searchText: string;
    }
}
