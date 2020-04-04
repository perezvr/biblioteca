import { Router } from 'express';
import BookController from './controllers/BookController';

const routes = new Router();

routes.post('/books', BookController.create);
routes.get('/books', BookController.index);
routes.delete('/books/:id', BookController.index);
routes.get('/api', BookController.infoByGoogleBooksApi);

routes

export default routes;