import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Theme } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

import { ICity } from '../interfaces/city';
import NavBar from './NavBar';
import CitiesList from './CitiesList';

const useStyles = makeStyles((theme: Theme) => ({
    layout: {
        height: '90%',
        marginBottom: '20'
    },
    gridWrapper: {
        margin: theme.spacing(2),
        backgroundColor: '#d2e5e9'
    }
}));

interface Props {
    isLoading: boolean;
    citiesDOMTOMSelector: ICity[];
    citiesMetropolitanSelector: ICity[];
    searchCities: (searchText: string) => void
}

const Dashboard: React.FC<Props> = (props) => {
    const classes = useStyles();
    const { isLoading, citiesDOMTOMSelector, citiesMetropolitanSelector, searchCities } = props;

    const handleSearchCities = (searchText: string) => {
        searchCities(searchText);
    };

    return(
        <>
            <NavBar
                isLoading={ isLoading }
                searchCities={ handleSearchCities }
            />
            <Grid container className={ classes.layout }>
                <Grid item xs={ 5 } className={ classes.gridWrapper }>
                    <CitiesList cities={ citiesMetropolitanSelector }/>
                </Grid>
                <Grid item xs={ 5 } className={ classes.gridWrapper }>
                    <CitiesList cities={ citiesDOMTOMSelector }/>
                </Grid>
            </Grid>
        </>
    );
};

export default Dashboard;
