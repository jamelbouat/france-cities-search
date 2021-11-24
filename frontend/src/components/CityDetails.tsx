import React from 'react';
import { Theme, Typography } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Grid from '@material-ui/core/Grid';

import { ICity } from '../interfaces/city';

const useStyles = makeStyles((theme: Theme) => ({
    layout: {
        backgroundColor: '#5b6770',
        padding: theme.spacing(1.5),
        color: '#fafafa',
        display: 'flex',
        justifyContent: 'space-between'
    },
    zipCode: {
        opacity: .5
    }
}));

interface Props {
    city: ICity;
}

const CityDetails: React.FC<Props> = (props) => {
    const classes = useStyles();
    const { city } = props;

    return (
        <Grid item xs={ 6 }>
            <Typography
                variant={ 'body1' }
                align={ 'center' }
                className={ classes.layout }
            >
                <Typography component={ 'span' }>{ city.nomCommune }</Typography>
                <Typography
                    component={ 'span' }
                    align={ 'center' }
                    className={ classes.zipCode }
                >
                    { city.codePostal }
                </Typography>
            </Typography>
        </Grid>
    );
};

export default CityDetails;
