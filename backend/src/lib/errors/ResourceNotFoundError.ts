import HttpError from './commons/HttpError';

class ResourceNotFoundError extends HttpError {
    constructor(message?: string) {
        super(message || 'Error: Cannot get the resources');
        this.status = 404;
    }
}

export default ResourceNotFoundError;
