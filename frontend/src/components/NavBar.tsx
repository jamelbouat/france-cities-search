import React, { useState } from 'react';
import { Grid, Theme, Typography } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';

import ProgressIndicator from './ProgressIndicator';

const useStyles = makeStyles((theme: Theme) => ({
    layout: {
        padding: theme.spacing(2),
        backgroundColor: '#d2e5e9',
        marginBottom: theme.spacing(2),
        borderRadius: 10,
        zIndex: -1
    },
    field: {
        backgroundColor: '#f9f9f9'
    }
}));

interface Props {
    isLoading: boolean;
    searchText: string;
    searchCities: (searchText: string) => void;
}

const NavBar: React.FC<Props> = (props) => {
    const classes = useStyles();
    const { isLoading, searchText, searchCities } = props;
    const [ text, setText ] = useState(() => searchText);

    const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const newSearchText = event.target.value;
        setText(newSearchText);
        searchCities(newSearchText);
    };

    return (
        <div>
            {
                isLoading && <ProgressIndicator/>
            }
            <form>
                <Grid container className={ classes.layout }>
                    <Grid item xs={ 2 }>
                        <Typography variant='h6'>
                            Je recherche...
                        </Typography>
                    </Grid>
                    <Grid item xs={ 10 }>
                        <TextField
                            autoFocus
                            fullWidth
                            name='searchText'
                            label='...une ville, un code postal'
                            type='text'
                            variant='outlined'
                            className={ classes.field }
                            size='small'
                            value={ text }
                            onChange={ handleTextChange }
                        />
                    </Grid>
                </Grid>
            </form>
        </div>

    );
};

export default NavBar;
