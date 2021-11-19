import { setupDIContainer, container } from '../config/di.config';
import App from './app';
import DBClient from '../config/db.config';
import { IController } from './interfaces/controllers';

setupDIContainer();

const dbClient: DBClient = container.resolve('dbClient');

// Controllers instances
const searchCityController: IController = container.resolve('searchCityController');

// Application entry point
const server = new App(dbClient, [
    searchCityController,
]);

server.listen();
