import React from 'react';
import { Typography } from '@material-ui/core';

import { ICity } from '../interfaces/city';

interface Props {
    cities: ICity[];
}

const CitiesList: React.FC<Props> = (props) => {
    const { cities } = props;

    return (
        <>
            {
                cities.length === 0 && <Typography variant='h6'>{ 'Aucune ville ne correspondant au text saisi' }</Typography>
            }
            {
                cities.length > 0 && <Typography variant='h6'>{ `${ cities.length } villes correspondant au text saisi` }</Typography>
            }
            {
                cities.map((city: ICity) => <div key={ city._id }>{ city.nomCommune }</div>)
            }
        </>
    );
};

export default CitiesList;
