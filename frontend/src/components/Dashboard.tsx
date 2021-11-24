import React from 'react';
import Grid from '@material-ui/core/Grid';

import { ICity } from '../interfaces/city';
import NavBar from './NavBar';
import CitiesContainer from './CitiesContainer';

interface Props {
    isLoading: boolean;
    searchText: string;
    citiesDOMTOMSelector: ICity[];
    citiesMetropolitanSelector: ICity[];
    searchCities: (searchText: string) => void;
    updateSearchParams: (searchText: string) => void;
}

const Dashboard: React.FC<Props> = (props) => {
    const {
        isLoading,
        searchText,
        citiesDOMTOMSelector,
        citiesMetropolitanSelector,
        searchCities,
        updateSearchParams
    } = props;

    const handleSearchCities = (searchText: string) => {
        searchCities(searchText);
        updateSearchParams(searchText);
    };

    return(
        <div>
            <NavBar
                searchText={ searchText }
                isLoading={ isLoading }
                searchCities={ handleSearchCities }
            />
            <Grid container spacing={ 2 }>
                <Grid item xs={ 6 }>
                    <CitiesContainer title={ 'Villes de métropole' } cities={ citiesMetropolitanSelector }/>
                </Grid>
                <Grid item xs={ 6 }>
                    <CitiesContainer title={ ' Villes d\'outre-mer' } cities={ citiesDOMTOMSelector }/>
                </Grid>
            </Grid>
        </div>
    );
};

export default Dashboard;
