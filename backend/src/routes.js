import { Router } from 'express';
import BookController from './app/controllers/BookController';
import GoogleBooksController from './app/controllers/GoogleBooksController';

const routes = new Router();

routes.post('/books', BookController.create);
routes.put('/books/:id', BookController.update);
routes.get('/books', BookController.index);
routes.delete('/books/:id', BookController.delete);

routes.get('/api', GoogleBooksController.getInfo);

routes

export default routes;