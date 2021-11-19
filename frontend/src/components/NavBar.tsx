import React from 'react';
import { Grid, Theme, Typography } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles((theme: Theme) => ({
    layout: {
        padding: theme.spacing(1),
        backgroundColor: '#d2e5e9',
        margin: theme.spacing(2),
    },
    field: {
        backgroundColor: '#f9f9f9'
    }
}));

interface Props {
    isLoading: boolean,
    searchCities: (searchText: string) => void
}

const NavBar: React.FC<Props> = (props) => {
    const classes = useStyles();
    const { isLoading, searchCities } = props;

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const searchText = event.target.value;
        searchText && searchCities(searchText);
    };

    return (
        <>
            <form>
                <Grid container className={ classes.layout }>
                    <Grid item xs={ 2 }>
                        <Typography variant='h6'>
                            Je recherche...
                        </Typography>
                    </Grid>
                    <Grid item xs={ 10 }>
                        <TextField
                            fullWidth
                            name='searchText'
                            label='...une ville, un code postal'
                            type='text'
                            variant='outlined'
                            className={ classes.field }
                            size='small'
                            onChange={ handleChange }
                        />
                    </Grid>
                </Grid>
            </form>
        </>
    );
};

export default NavBar;
