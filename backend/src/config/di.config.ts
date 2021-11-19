import * as awilix from 'awilix';

import DBClient from './db.config';
import SearchCitiesController from '../lib/controllers/SearchCitiesController';
import SearchCitiesService from '../lib/services/SearchCitiesService';
import CityModel from '../lib/models/CityModel';

const container = awilix.createContainer({
    injectionMode: awilix.InjectionMode.PROXY
});

const setupDIContainer = (): void => {
    container.register({
        // Controllers
        searchCityController: awilix.asClass(SearchCitiesController),

        // Database
        dbClient: awilix.asClass(DBClient),

        // Services
        searchCitiesService: awilix.asClass(SearchCitiesService),

        // Models
        cityModel: awilix.asValue(CityModel)
    });
};

export { container, setupDIContainer };
