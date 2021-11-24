import React from 'react';
import { Theme, Typography } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';

import { ALERT_TYPE } from '../constants';

const useStyles = makeStyles((theme: Theme) => ({
    layout: {
        color: 'white',
        marginBottom: theme.spacing(2),
        padding: theme.spacing(1)
    },
    alertSuccess: {
        backgroundColor: '#72cb79'
    },
    alertError: {
        backgroundColor: '#c47779'
    }
}));

interface Props {
    text: string;
    type: ALERT_TYPE;
}

const Alert: React.FC<Props> = (props) => {
    const classes = useStyles();
    const { text, type } = props;

    return (
        <Typography
            variant={ 'h6' }
            align={ 'center' }
            className={ `${ classes.layout } ${ type === ALERT_TYPE.ERROR ? classes.alertError : classes.alertSuccess }` }
        >
            { text }
        </Typography>
    );
};

export default Alert;
