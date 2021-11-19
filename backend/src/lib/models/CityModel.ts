import { model, Schema } from 'mongoose';

import { ICity } from '../interfaces/city';

const citySchema: Schema = new Schema({
    codePostal: {
        type: String,
        required: true
    },
    codeCommune: {
        type: String,
        required: true
    },
    nomCommune: {
        type: String,
        required: true
    },
    libelleAcheminement: {
        type: String,
        required: true
    },
},{ timestamps: true }
);

const CityModel = model<ICity>('FranceCities', citySchema);

export default CityModel;
