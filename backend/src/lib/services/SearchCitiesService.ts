import { Model } from 'mongoose';

import { ICity } from '../interfaces/city';
import ResourceNotFoundError from '../errors/ResourceNotFoundError';

class SearchCitiesService {
    private cityModel: Model<any>;

    constructor({ cityModel }: { cityModel: Model<any> }) {
        this.cityModel = cityModel;
    }

    public async searchCities(searchText: string): Promise<ICity[]> {
        const regexCityName = new RegExp(searchText, 'i' );
        const regexZipCode = new RegExp(searchText);

        try {
            return await this.cityModel
                .find({
                    $or: [
                        {
                            nomCommune: {
                                $regex: regexCityName,
                            },
                        },
                        {
                            codePostal: {
                                $regex: regexZipCode,
                            }
                        }
                    ]
                })
                .sort({ nomCommune: 1 })
                .limit(100);
        } catch (error) {
            throw new ResourceNotFoundError();
        }
    }
}

export default SearchCitiesService;
