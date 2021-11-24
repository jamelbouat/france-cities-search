import React from 'react';
import { Theme, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';

import { ICity } from '../interfaces/city';
import Alert from './Alert';
import { ALERT_TYPE } from '../constants';
import CityDetails from './CityDetails';

const useStyles = makeStyles((theme: Theme) => ({
    layout: {
        backgroundColor: '#d2e5e9',
        height: '80vh',
        overflowY: 'scroll',
        padding: theme.spacing(2),
        borderRadius: 10
    }
}));

interface Props {
    title: string;
    cities: ICity[];
}

const CitiesContainer: React.FC<Props> = (props) => {
    const classes = useStyles();
    const { title, cities } = props;

    return (
        <div className={ classes.layout }>
            <Typography variant={ 'h5' } align={ 'center' }>{ title }</Typography>
            {
                cities.length === 0 &&
                <Alert type={ ALERT_TYPE.ERROR } text={ 'Aucune ville ne correspondant au text saisi' } />
            }
            {
                cities.length > 0 &&
                <Alert type={ ALERT_TYPE.SUCCESS } text={ `${ cities.length } villes correspondant au text saisi` } />
            }
            <Grid container spacing={ 2 }>
                {
                    cities.map((city: ICity) => <CityDetails  key={ city._id } city={ city }/>)
                }
            </Grid>
        </div>
    );
};

export default CitiesContainer;
