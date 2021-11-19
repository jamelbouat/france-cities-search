
interface ICity extends Document {
    _id: string;
    codePostal: string;
    codeCommune: string;
    nomCommune: string;
    libelleAcheminement: string;
}

export { ICity };
