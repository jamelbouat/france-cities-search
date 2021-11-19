import { NextFunction, Request, Response, Router } from 'express';

import { IController } from '../interfaces/controllers';
import SearchCitiesService from '../services/SearchCitiesService';
import { SEARCH_CITIES } from '../../config/url.config';

class SearchCitiesController implements IController {
    public router: Router;
    private searchCitiesService: SearchCitiesService

    constructor({ searchCitiesService }: { searchCitiesService: SearchCitiesService}) {
        this.searchCitiesService = searchCitiesService;
        this.router = Router();
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get(SEARCH_CITIES, this.searchCities);
    }

    private searchCities = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const searchText = req.query.search as string;
            const cities = await this.searchCitiesService.searchCities(searchText);
            res.status(200).send({ cities });
        } catch (error) {
            next(error);
        }
    }
}

export default SearchCitiesController;
